# TaskTrial Organization GitHub Templates

This repository contains organization-wide GitHub templates and workflows for TaskTrial projects.

## What's Included

### CI/CD Workflows

- `workflow-templates/standard-ci.yml` - Standard CI pipeline for Node.js projects

### Issue Templates

- `ISSUE_TEMPLATE/bug_report.md` - Template for bug reports
- `ISSUE_TEMPLATE/feature_request.md` - Template for feature requests

### Pull Request Template

- `PULL_REQUEST_TEMPLATE.md` - Standard pull request template

### Community Health Files

- `CODE_OF_CONDUCT.md` - Organization code of conduct
- `SECURITY.md` - Security policy

### Configuration Scripts

- `scripts/create-labels.js` - Script to set up standardized labels across repositories

## How to Use These Templates

### For New Repositories

1. When creating a new repository in the TaskTrial organization, these templates will be automatically available.
2. The labels script will run automatically when a new repository is created.

### For Existing Repositories

To add these templates to an existing repository:

1. **CI/CD Workflow**:

   - Go to the Actions tab in your repository
   - You should see the organization workflow templates available
   - Click "Set up this workflow" on the Standard CI workflow

2. **Issue Templates and PR Template**:

   - Create a `.github` directory in your repository if it doesn't exist
   - Copy the relevant templates from this repository
   - Customize as needed for your specific project

3. **Labels**:
   - Run the labels workflow manually:
     - Go to the Actions tab in your repository
     - Select the "Setup Repository Labels" workflow
     - Click "Run workflow"

## Customizing Templates

While these templates provide a good starting point, you may need to customize them for specific projects:

1. **CI/CD Workflow**: Adjust the Node.js version, build commands, or add deployment steps as needed
2. **Issue Templates**: Add project-specific fields or instructions
3. **Labels**: Modify the labels list in the script to add project-specific labels

## Contributing

To suggest changes to these templates:

1. Fork this repository
2. Make your changes
3. Submit a pull request with a clear description of the improvements

## License

[Insert your organization's license here]
