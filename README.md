### Microservices Transition: From Monolithic Architecture to Scalable, Independent Services on AWS Cloud <br /><br />

This project demonstrates the initial deployment of a Node.js application as a monolithic architecture and its subsequent transition to a microservices architecture in the AWS cloud. The node.js application is a web API created using the Koa framework that serves various endpoints for handling requests related to users, threads, and posts. It hosts a simple message board with threads and messages between users.

<img width="700" height ="300" alt="image" src="https://github.com/user-attachments/assets/b386f92a-1893-4459-91db-98dd7c214ca1"><br/><br/>

### Implementing Monolithic Architecture on AWS Cloud

#### Part-1 Building a docker image of our Node.js application and uploading it to amazon ECR
Firstly, we built the Docker container image for our monolithic node.js application and created an Amazon Elastic Registry( Amazon ECR) repository in AWS and pushed the docker image to that repository via AWS CLI.

<img width="700" height = "300"  alt="ECR_create" src="https://github.com/user-attachments/assets/de9c8f1e-6a3e-4e92-9c8c-1bc7a3c3dfec"> <br /><br /><br /><br />
<img width="700" height ="300" alt="Amazon_ECR_repo_image" src="https://github.com/user-attachments/assets/2cb66b72-a0ae-43ef-9cd3-78996b48a0c4"> <br /><br /><br /><br />
<img width="700" height = "300" alt="Amazon_ECR_docker_image" src="https://github.com/user-attachments/assets/4dae7ad0-52ec-441e-8589-b308092bd057">

#### Part-2 Creating an Amazon Elastic Container Service Cluster.
In this section, we have used Amazon Elastic Container Service (Amazon ECS) to instantiate a managed cluster of EC2 compute instances to deploy the docker image of our monolithic node.js application stored in the ECR Repository as a container to run on this cluster. Creating an Amazon ECS cluster is a fundamental step in deploying and managing containerized applications within AWS. An ECS cluster is a logical grouping of EC2 instances or AWS Fargate compute resources that provide the infrastructure for running tasks and services based on task defintion.

<img width="700" height ="300" alt="ECS_Cluster_config_1" src="https://github.com/user-attachments/assets/29658c87-4852-4581-a705-38f5002a4e6f"> <br /><br />
<img width="700" heght ="300" alt="ECS_Cluster_config_3" src="https://github.com/user-attachments/assets/1294fa68-10e8-4035-8cec-d6c0b2a8c411"> <br /><br />
<img width="700" height ="300" alt="ECS_Cluster_config_4" src="https://github.com/user-attachments/assets/afe065ff-7321-4798-8be3-e0a1aff0f3f6"> <br /><br />
<img width="700" height ="300" alt="ECS_Cluster_config_5" src="https://github.com/user-attachments/assets/81301279-5372-4465-a882-b42eb3a4261f"> <br /><br />


#### Part-3 Configuring load balancer and Target Groups
In this section, we have set up target groups and configured an Application Load Balancer to efficiently manage and route HTTP traffic to the task services which will be deployed within our ECS cluster instances.
##### Part-3.1 Creating a Target Group for ALB 
<img width="700" height = "300" alt="Target_group_Config_1" src="https://github.com/user-attachments/assets/c2710325-8507-43c3-8545-9edf01dd731a"> <br /><br />
<img width="700" height ="300" alt="Target_group_Config_2" src="https://github.com/user-attachments/assets/f12ad0db-d8eb-42b6-a912-d5f16ecc7bc9"> <br /><br />
<img width="700" height ="300" alt="Target_group_Config_3" src="https://github.com/user-attachments/assets/7b5cbff0-983e-47ac-9490-78cbc2c758b2"> <br /><br />
<img width="700" height ="300" alt="Target_group_config_4" src="https://github.com/user-attachments/assets/e17c3d9c-485f-41e8-9918-e87df33d02ac"> <br /><br />
<img width="700" height= "300" alt="Target_group_config_5" src="https://github.com/user-attachments/assets/365a9fc5-c4f5-4892-bbf9-f359cd7e6520"> <br /><br />

##### Part-3.2 Creating an Application Load Balancer reffering to the above target group
<img width="700" height ="300" alt="Load_Balancer_Config_1" src="https://github.com/user-attachments/assets/76b6e603-9079-4a1b-8eb6-4a3ac6a2871d"><br /><br />
<img width="700" height ="300" alt="Load_Balancer_Config_2" src="https://github.com/user-attachments/assets/cdabd500-5e80-4070-929b-91b2bb1eb7e3"><br /><br />
<img width="700" height ="300" alt="Load_Balancer_Config_3" src="https://github.com/user-attachments/assets/73cdecdd-bf8f-442c-9880-85c6035c746e"><br /><br />
<img width="700" height ="300" alt="Load_Balancer_Config_4" src="https://github.com/user-attachments/assets/8c469f71-90e5-40c1-a0e4-2b7312b787dc"><br /><br />

#### Part-4 Task Defnition
In this section, we will define a task definition for our ECS cluster to facilitate the deployment of our containerized application. A task definition acts as a blueprint for our application, specifying the container image by using docker image URL stored in the ECR, resource allocations (such as CPU and memory), and networking configurations. By creating a task definition, we enable ECS to launch and manage tasks or services that utilize our container image. This configuration includes defining container ports, environment variables, and any necessary IAM roles or policies required for secure operations. Once the task definition is established, it will serve as the foundation for deploying and scaling our containerized application within the ECS cluster.

<img width="700" height = "300" alt="Task_definition_Config_1" src="https://github.com/user-attachments/assets/8a1d189e-3885-4daa-8ec2-aec3d8c9fd30"><br /><br />
<img width="700" height = "300" alt="Task_definition_Config_2" src="https://github.com/user-attachments/assets/10c33719-ac97-4760-9761-5bba8421959a"><br /><br />
<img width="700" height = "300" alt="Task_definition_Config_3" src="https://github.com/user-attachments/assets/3b09a4a2-a0c1-4705-952c-17537e9db167"><br /><br />
<img width="700" height = "300" alt="Task_definition_Config_4" src="https://github.com/user-attachments/assets/6c1a48dd-de1a-444b-beea-ce6a9218b11c"><br /><br />
<img width="700" height = "300" alt="Task_definition_Config_5" src="https://github.com/user-attachments/assets/802115f7-e92b-4d79-8d7d-5ac579f5689f"><br /><br />
<img width="700" height = "300" alt="Task_Definition_Config_6_imp" src="https://github.com/user-attachments/assets/c36dcaae-2fc5-485c-93f6-f60609e436b7">

#### Part-5 Creating a Service referring to above task definition
After creating the task definition, the next step is to create a service within the ECS cluster. An ECS service is responsible for managing the deployment and lifecycle of tasks based on the specified task definition. It ensures that the desired number of task instances are continuously running and healthy. The service integrates with the ECS cluster to handle task scheduling, load balancing, and scaling.

In this step, the Application Load Balancer (ALB) and target groups configured earlier are utilized to direct traffic to the service. The service configuration specifies the target group associated with the ALB, enabling the ALB to distribute incoming HTTP traffic across the running tasks. The ALB performs health checks on the tasks and ensures that traffic is only routed to healthy instances. Additionally, the service supports auto-scaling policies, leveraging the ALB and target groups to maintain application performance and availability by scaling the number of tasks in response to changing load conditions.

<img width="700" height = "300" alt="Task_Service_Config_1" src="https://github.com/user-attachments/assets/aee11fcb-0561-42f9-a458-0f15a8a49f5b"><br /><br />
<img width="700" height = "300" alt="Task_Service_Config_2" src="https://github.com/user-attachments/assets/9e30db02-df62-46fc-9e6d-f0ccdc452336"><br /><br />
<img width="700" height = "300" alt="Task_Service_Config_3" src="https://github.com/user-attachments/assets/cec1e3fe-ccbd-4a6e-bf64-fd6de8d3408a"><br /><br />
<img width="700" height = "300" alt="Task_Service_Config_4" src="https://github.com/user-attachments/assets/fd69d4fb-33ea-448f-937f-9bacb59fd22f"><br /><br />
<img width="700" height = "300" alt="Task_Service_Config_5" src="https://github.com/user-attachments/assets/b06db53c-1e0e-43ed-9712-8ca465f933fc"><br /><br />
<img width="700" height = "300" alt="Task_Service_Config_6" src="https://github.com/user-attachments/assets/5d99c698-623d-4b1b-ab0a-7f91db35469f"><br /><br />
<img width="700" height = "300" alt="Task_Service_Config_7" src="https://github.com/user-attachments/assets/f8f9b8d3-8b8f-4c2c-8c96-7d1957361ceb"><br /><br />
<img width="700" height = "300" alt="Task_Service_Config_8" src="https://github.com/user-attachments/assets/cb549695-b6f5-4bb0-80e5-f1a6c5be4855"><br /><br />

#### Part-6 Output

The application is successfully deployed on both AWS ECS and locally. The Node.js application consists of 3 services namely Users, Posts and Threads. The container image used in this monolithic implementation consists of all the three services bundled in one file. When /api/users endpoint which is one of the services endpoint route defined in the file is accessed, it returns a JSON array of users, as demonstrated in the attached screenshots. This confirms that the API is functioning correctly and serves user data as expected. The current implementation is a monolithic architecture where all features or services are bundled in a single application. In the next phase, this will be refactored into microservices, with separate services handling users, posts, and threads for better scalability and maintainability.

##### Working of the API on accessing /api/users endpoint via localhost development environment on Port 3000
<img width="500" height ="300" alt="Node js_working_in_local" src="https://github.com/user-attachments/assets/b18696c0-24ca-4af2-9fba-5fe570722a31"><br /><br />

##### API response on accessing /api/users endpoint via AWS Load Balancer DNS URL on Port 80
<img width= "500" height = "300" alt="AWS_ECS_Working" src="https://github.com/user-attachments/assets/465a6ca1-1d93-4c60-b39e-a9163b1b2119">

### Transitioning from Monolithic to Microservices Architecture on AWS Cloud

In microservices architecture, each feature of a Node.js application namely Users, Posts and Threads runs as a separate service in its own container. This design allows services to be independently scaled and updated, improving resource management and deployment flexibility. The isolated nature of each service ensures that failures in one do not impact others, and different technologies can be used per service, fostering innovation and efficiency.

<img width="700" height = "300" alt="Microservices_snip" src="https://github.com/user-attachments/assets/aba1a981-7847-4650-be25-6da2ed686bce">


#### Part-1 Provisioning additional ECR Repositories and uploading respective service docker images
Previously, we deployed our application as a monolith using a single service and a single container image repository. To deploy the application as three microservices of users,posts and threads, we will need to provision  additional three repositories (one for each service) in Amazon ECR. After provisioning repositories in ECR, we will break the node.js application into interconnected services namely users, posts and threads. content of folder "3-containerized-microservices" has dockerfile for each services of node.js application, we will push each of service's docker image to the respective Amazon Elastic Container Registry (Amazon ECR) repositories as shown below.

<img width="700" height ="300" alt="ECR_microservices_repository" src="https://github.com/user-attachments/assets/277d9449-ae5d-46ba-8b39-3aa1b80c986f">

#### Part-2 Creating Task Defintions for each of the services
In this step, we will create task defintions for each of the services namely Users, Posts and Threads by using the respective container image URL from the ECR repostories as shown below.

<img width="700" height= "300" alt="Microservices_Task_defintions" src="https://github.com/user-attachments/assets/241d8a15-6611-4754-bcdd-891c0101f92c">

### #Part-3 Configuring target groups and ALB listener rules

#### Part-3.1 Adding target groups
In this step, we will create addtional three target groups one for each of users, posts and threads features of our application, wuth the same EC2 cluster targets as shown below.

<img width="700" height = "300" alt="Target_group_update_elb_yet" src="https://github.com/user-attachments/assets/de096416-5764-4d6f-904b-b7584ec652a7">

##### Part-3.2 Updating ALB listener rules

Once the target groups are created, they must be associated with the active Application Load Balancer (ALB) to correctly route HTTP requests to the appropriate task services. This involves configuring the HTTP port 80 listener rules as follows:

<img width="700" height = "300" alt="Load_Balancer_5_Listener_rules" src="https://github.com/user-attachments/assets/78e16bfb-4187-4619-af50-ccd26cb4a4e1">

1. ###### Path-based Routing: Define rules to forward requests based on the URL path:
   - IF Path = /api/[service-name] THEN Forward to [service-name]`
   - For example, `IF Path = /api/posts* THEN Forward to posts`

2. ###### Rule Order: we applied the rules in this sequence:
   - `/api*` forwards to `api`
   - `/api/users*` forwards to `users`
   - `/api/threads*` forwards to `threads`
   - `/api/posts*` forwards to `posts`

This configuration ensures that HTTP requests are directed to the correct service based on the specified path patterns. Also, Route with priority -1 which is /api* and the detault route points to the target group associated with the service running the monolithic container image and the rest of the routes redirect HTTP requests to their respective microservice.


#### Part-5 Creating and deploying additional Services on ECS Cluster referring to the above task definitions and target groups.

In order to deploy the three microservices (posts, threads, and users) to our cluster. we need to create additional three microservices with the corresponding task defintions associating the respective container image URLs and target groups.

Below is an image showing the configuration of service for Posts feature, which refers to task defintion created for Posts feature and the target group created for posts 
feature in the previous step.

<img width="700" height = "300" alt="Task_Service_Config_Posts" src="https://github.com/user-attachments/assets/398c2f09-654f-4fd1-bc93-cd61f3be22f1"><br /><br />
Similarly, we created other services running on ECS cluster with the respective container images for threads and users as shown below.

<img width="700" height = "300" alt="Final_micro_Services_running_image" src="https://github.com/user-attachments/assets/1d6fca4b-61ce-40b6-a49b-4464c2b1b86a">

#### Part-6 Microservices Deployment
In the final phase of transitioning from a monolithic architecture to a microservices-based setup, the traffic redirection is refined by deleting the ALB's listener rule that routes /api requests to the legacy monolithic target group service. This step involves deleting the specific listener rule for /api and updating the default listener rule to users target group (or any other service like posts or threads target groups, as they have a response to route /api endpoint by default) as shown in the below image.
<br/><br />
<img width="700" heigh = "300" alt="ALB_all5_microservice_listener_rules_config" src="https://github.com/user-attachments/assets/d9fa6678-448a-4fdc-839f-eeb923dab109">
<br/><br />
Concurrently, In the monolithic service configuration we updated the number of tasks to set to zero, effectively decommissioning the monolithic service. This transition ensures that each microservice operates independently, with isolated failure domains and independent scalability. Consequently, a failure in one feature does not affect the others, enhancing overall system resilience and operational efficiency.
<br/><br />
<img width="700" height="300" alt="final_delete_monolithic_service_update_step1" src="https://github.com/user-attachments/assets/454803fc-9047-4eec-8075-3ddb84f342c2"><br /><br />
<img width="700" height="300" alt="final_delete_monolithic_service_update_step2" src="https://github.com/user-attachments/assets/2870f8a7-2268-4545-a0cf-3fe4e957bf1c"><br /><br />
<img width="700" height="300" alt="final_delete_monolithic_service_update_step_complete" src="https://github.com/user-attachments/assets/420093bc-5ddd-44d4-b3d1-2f6fb25da2f3"><br /><br />


#### Part-7 Output

The output images below illustrate the successful migration to a microservices architecture. <br /><br /> 
Default route - "/api" or "/" repsonse by microservice architecture<br /><br /> 
<img width="700" height ="300" alt="Microservices_LB_Output_default" src="https://github.com/user-attachments/assets/a0a7dd85-1d80-4793-b46f-784dd8bcadfd"><br /><br />
Before deploying Users feature microservice<br /><br /> 
<img width="700" height = "300" alt="LB_output_before_deploying_users_task_microservice" src="https://github.com/user-attachments/assets/9508b1cc-1ae6-42a7-8847-228b971f6eea"><br /><br /> 
After deploying Users feature microservice<br /><br />
<img width="700" height ="300" alt="LB_output_after_deploying_users_task_microservice" src="https://github.com/user-attachments/assets/feb04e7e-dc04-4055-9123-d12a8841cf4b"><br /><br />
Before deploying Posts feature microservice<br /><br />
<img width="700" height ="300" alt="LB_output_before_deploying_posts_task_service" src="https://github.com/user-attachments/assets/bbe102ca-da7a-4879-9ba2-b53d8a82a666"><br /><br />
After deploying Posts feature microservice<br /><br />
<img width="700" height= "300" alt="LB_output_after_deploying_posts_task_microservice" src="https://github.com/user-attachments/assets/96856a4a-40ca-4710-96a1-3daa9124e713">
<br /><br />
Before deploying Threads feature microservice<br /><br /> 
<img width="700" height ="300" alt="LB_output_before_deploying_threads_task_microservice" src="https://github.com/user-attachments/assets/93ebefba-9eb5-4707-81c9-4000f13db49b"><br /><br />
After deploying Threads feature microservice<br /><br />
<img width="700" height ="300" alt="LB_output_after_deploying_threads_task_microservice" src="https://github.com/user-attachments/assets/7ab0704c-6518-498a-af4e-9dc9794771a8"><br /><br />






















