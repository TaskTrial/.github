const { Octokit } = require("@octokit/rest");

// Configure the GitHub token (should be set as an environment variable)
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

// Define the owner (organization name) and repository name
const owner = process.env.GITHUB_REPOSITORY_OWNER || "your-org-name";
const repo = process.env.GITHUB_REPOSITORY.split("/")[1] || "your-repo-name";

// Define the standard labels for TaskTrial repositories
const labels = [
  {
    name: "bug",
    color: "d73a4a",
    description: "Something isn't working as expected",
  },
  {
    name: "enhancement",
    color: "a2eeef",
    description: "New feature or request",
  },
  {
    name: "documentation",
    color: "0075ca",
    description: "Improvements or additions to documentation",
  },
  {
    name: "good first issue",
    color: "7057ff",
    description: "Good for newcomers to the project",
  },
  {
    name: "help wanted",
    color: "008672",
    description: "Extra attention is needed",
  },
  {
    name: "priority: high",
    color: "b60205",
    description: "High priority task that needs immediate attention",
  },
  {
    name: "priority: medium",
    color: "fbca04",
    description: "Medium priority task",
  },
  {
    name: "priority: low",
    color: "c2e0c6",
    description: "Low priority task",
  },
  {
    name: "needs-triage",
    color: "e4e669",
    description: "Needs review by maintainers",
  },
  {
    name: "wontfix",
    color: "ffffff",
    description: "This will not be worked on",
  },
  {
    name: "duplicate",
    color: "cfd3d7",
    description: "This issue or pull request already exists",
  },
  {
    name: "backend",
    color: "0e8a16",
    description: "Related to the backend code",
  },
  {
    name: "frontend",
    color: "1d76db",
    description: "Related to the frontend code",
  },
  {
    name: "mobile",
    color: "5319e7",
    description: "Related to the mobile application",
  },
  {
    name: "sprint:planning",
    color: "c5def5",
    description: "Tasks related to sprint planning",
  },
  {
    name: "dependencies",
    color: "0366d6",
    description: "Pull requests that update a dependency file",
  },
  {
    name: "security",
    color: "ee0701",
    description: "Security-related issues or enhancements",
  },
];

// Function to create or update a label
async function createOrUpdateLabel(label) {
  try {
    // Try to get the label first to see if it exists
    try {
      await octokit.issues.getLabel({
        owner,
        repo,
        name: label.name,
      });

      // Label exists, update it
      await octokit.issues.updateLabel({
        owner,
        repo,
        name: label.name,
        color: label.color,
        description: label.description,
      });
      console.log(`✓ Updated label: ${label.name}`);
    } catch (error) {
      if (error.status === 404) {
        // Label doesn't exist, create it
        await octokit.issues.createLabel({
          owner,
          repo,
          name: label.name,
          color: label.color,
          description: label.description,
        });
        console.log(`+ Created label: ${label.name}`);
      } else {
        throw error;
      }
    }
  } catch (error) {
    console.error(`✗ Error handling label ${label.name}: ${error.message}`);
  }
}

// Function to delete default labels that we don't want
async function deleteUnwantedLabels() {
  // List of default GitHub labels that we want to remove
  const unwantedLabels = [
    "question",
    "invalid",
    "help wanted", // We'll recreate this with our own color/description
  ];

  try {
    // Get all existing labels
    const { data: existingLabels } = await octokit.issues.listLabelsForRepo({
      owner,
      repo,
    });

    // Find labels that match our unwanted list
    const labelsToDelete = existingLabels.filter((label) =>
      unwantedLabels.includes(label.name)
    );

    // Delete each unwanted label
    for (const label of labelsToDelete) {
      try {
        await octokit.issues.deleteLabel({
          owner,
          repo,
          name: label.name,
        });
        console.log(`- Deleted label: ${label.name}`);
      } catch (error) {
        console.error(`✗ Error deleting label ${label.name}: ${error.message}`);
      }
    }
  } catch (error) {
    console.error(`✗ Error listing labels: ${error.message}`);
  }
}

// Main function to run the script
async function main() {
  console.log(`\nSetting up labels for ${owner}/${repo}...`);

  // Delete unwanted default labels first
  await deleteUnwantedLabels();

  // Create or update our custom labels
  for (const label of labels) {
    await createOrUpdateLabel(label);
  }

  console.log(`\nLabel setup complete for ${owner}/${repo}!`);
}

// Run the script
main().catch((error) => {
  console.error(`\n✗ Script failed with error: ${error.message}`);
  process.exit(1);
});
