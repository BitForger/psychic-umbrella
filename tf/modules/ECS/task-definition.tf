resource "aws_ecs_task_definition" "primary" {
  container_definitions = file("${path.module}/container.json")
  family = "acoustic-frontend"
  memory = "128"
  cpu = "128"
}
