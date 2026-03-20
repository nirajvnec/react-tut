Job Title: Senior Software Engineer
Location: Pune, India
Experience: 3–5 Years
Employment Type: Full-Time
About the Role
We are looking for a Senior Software Engineer with strong hands-on experience in cloud-native application development, data platform integrations, and enterprise identity management. You will work on building and maintaining secure, scalable backend services and integrations across Azure and AWS ecosystems, with a focus on programmatic data governance and access management via APIs.
Key Responsibilities
Design, develop, and maintain .NET / C# backend services and APIs hosted on Azure App Service
Integrate with Microsoft Graph API for identity, user, and group management operations
Manage and consume secrets securely using Azure Key Vault, with environment variable configuration on App Service
Work with Azure Active Directory (Azure AD) and Service Principal / App Registrations for authentication and authorization flows
Build and maintain data pipelines and queries on Azure SQL Database
Develop and execute Python notebooks and jobs on Azure Databricks and AWS Databricks across multiple workspaces
Administer and manage Unity Catalog — including metastores, catalogs, schemas, and tables — across Azure and AWS Databricks workspaces
Programmatically grant and revoke access on Databricks resources using Databricks REST APIs — permissions API, Unity Catalog grants API, and workspace access control API
Configure and maintain Azure AD group sync with Databricks Account Console using SCIM provisioning — ensuring users and groups from Azure AD are automatically reflected in Databricks
Create and manage Delta Sharing — configure shares, add tables/schemas to shares, and manage recipients for cross-workspace and cross-cloud data sharing
Programmatically manage access in Palantir Foundry using Palantir APIs — assign/revoke roles, manage markings, control resource-level permissions via API calls
Build .NET integrations with Palantir Foundry — authenticate using OAuth2 client credentials and fetch platform resources such as projects, datasets, and folders via Compass/Foundry APIs
Use Azure CLI for resource provisioning, scripting, and automation of cloud operations
Manage source code, branching strategies, and pull requests using Git
Work within Azure DevOps for sprint planning, work item tracking, and CI/CD pipelines
Implement best practices around secrets rotation, least-privilege access, and secure service-to-service communication
Collaborate with data engineers, platform teams, and architects on solution design and delivery
Required Skills
Cloud & Infrastructure
Azure App Service, Azure Key Vault, Azure AD, App Registrations / Service Principals
Hands-on experience with Azure environment variable configuration and managed identities
Azure CLI — resource management, scripting, and automation
Backend Development
Proficient in .NET 6/8 and C# — REST APIs, background services
Experience with Microsoft Graph API (users, groups, directory objects)
Databases
Strong SQL skills with Azure SQL Database
Query optimization and schema design experience
Data Platforms — Databricks & Unity Catalog
Hands-on with Azure Databricks and AWS Databricks across multiple workspaces
Unity Catalog administration — creating and managing metastores, catalogs, schemas, tables, and volumes
Access management in Unity Catalog — granting/revoking privileges on securable objects (catalog, schema, table, view, function) to users, groups, and service principals
Understanding of Unity Catalog hierarchy: Metastore → Catalog → Schema → Table
Delta Sharing — creating shares, adding tables and schemas, managing recipients, and configuring cross-cloud data sharing between Azure and AWS
Familiarity with external locations, storage credentials, and cluster/SQL warehouse policies in Databricks
Azure AD Group Sync with Databricks Account Console
Understanding of how Azure AD groups are synced to the Databricks Account Console using SCIM (System for Cross-domain Identity Management) provisioning
Knowledge of setting up the Azure AD Enterprise Application for Databricks and configuring automatic provisioning
Understanding the sync flow:
Azure AD groups and members are pushed to Databricks Account-level identity store via SCIM
Synced groups appear in the Databricks Account Console under Identity & Access
Groups are then assigned to individual workspaces from the account console
Once in a workspace, groups can be granted permissions on clusters, jobs, SQL warehouses, and Unity Catalog objects
Awareness of SCIM token generation at the Databricks account level and how it is configured in Azure AD provisioning settings
Understanding the difference between account-level groups (synced via SCIM) vs workspace-local groups (created directly in a workspace) and why account-level groups are preferred for Unity Catalog
Familiarity with sync frequency, handling provisioning errors, and troubleshooting failed user/group sync scenarios
Knowledge of how nested groups behave during SCIM sync — Azure AD nested group membership flattening behavior in Databricks
Ability to verify sync status via Databricks Account Console UI and via SCIM API (GET /accounts/{accountId}/scim/v2/Groups)
Databricks REST APIs for Access Management
Permissions API — get and update permissions on clusters, jobs, notebooks, SQL warehouses, and Delta Live Tables pipelines
Unity Catalog Grants API — programmatically assign and revoke privileges (GRANT, REVOKE) on securable objects via REST calls
Groups API — create groups, add/remove members, manage group entitlements across workspaces
Service Principals API — manage service principal assignments, roles, and workspace-level entitlements
SCIM API — provision and deprovision users and groups in Databricks workspaces using Azure AD SCIM sync or direct API calls
Ability to write Python or C# scripts that call Databricks APIs using a Personal Access Token (PAT) or service principal OAuth token
Palantir Foundry — Access Management & APIs
Understanding of Foundry's ontology layer — object types, links, and properties
Basic knowledge of resource-based access control in Foundry — organizations, markings, and roles
Familiarity with Foundry datasets, pipelines (Transforms), and how data flows through the platform
Foundry / Compass API — manage resource-level permissions, assign roles to users and groups on projects, datasets, and folders
Multipass API — Palantir's identity and access service; manage users, groups, group memberships, and third-party application tokens programmatically
Markings API — apply and remove data classification markings on resources to control visibility and access
Enrollment API — manage user enrollment into organizations and control which users belong to which Palantir organizations
Palantir Foundry — .NET Integration & Authentication (Good to Have)
Understanding of how a .NET / C# application authenticates with Palantir Foundry using the OAuth2 Client Credentials flow
Knowledge of how Palantir issues a Client ID and Client Secret for a third-party application registered on the Foundry platform
Ability to obtain a Bearer token by posting to Palantir's OAuth2 token endpoint:
Endpoint: https://<foundry-host>/multipass/api/oauth2/token
Grant type: client_credentials
Parameters: client_id, client_secret, scope
Using the Bearer token to call Compass API to fetch all projects:
Endpoint: https://<foundry-host>/compass/api/resources
Filtering by resource type PROJECT to list all accessible projects
Paginating through results using pageToken for large project lists
Storing client_id and client_secret securely in Azure Key Vault and loading them at runtime via App Service environment variables
Understanding token expiry and implementing token refresh / caching logic in C# to avoid redundant authentication calls
Ability to wrap all Palantir API interactions in a clean C# service layer — PalantirAuthService, PalantirProjectService — following dependency injection patterns in .NET 8
Python
Scripting for data processing, automation, and Databricks jobs
Calling Databricks and Palantir REST APIs programmatically
Security & Access Management
Experience managing secrets and credentials using Azure Key Vault
Understanding of OAuth2, client credentials flow, and service principal authentication
Knowledge of RBAC and data governance principles across cloud data platforms
Experience building automated access provisioning and deprovisioning workflows using APIs
DevOps & Version Control
Git — branching strategies (GitFlow / trunk-based), pull requests, merge conflict resolution
Azure DevOps — boards, repos, pipelines (CI/CD), sprint and work item management
Basic pipeline configuration for build, test, and deployment automation
Good to Have
Hands-on Palantir Foundry integration experience — OAuth2 authentication, Compass API, project/resource fetching from .NET
Experience with Azure Service Bus or event-driven architectures
React / TypeScript for light frontend work
Familiarity with data governance frameworks and data mesh concepts
Qualifications
Bachelor's degree in Computer Science, Engineering, or related field
3–5 years of relevant industry experience
Strong communication and problem-solving skills
Ability to work independently and collaborate in a cross-functional, distributed team
Key additions in the Azure AD Group Sync section:
SCIM provisioning setup — Azure AD Enterprise Application config for Databricks
Full sync flow — Azure AD → Account Console → Workspace → Unity Catalog
SCIM token generation and configuration
Account-level vs workspace-local groups — why account-level is preferred
Nested group flattening behavior
Troubleshooting sync failures and verifying via SCIM API
Want this exported as a Word doc