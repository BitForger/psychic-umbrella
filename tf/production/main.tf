provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket = "nkovacs-tf-conf-states"
    key = "acoustic-frontend/acoustic-frontend.tfstate"
    region = "us-east-1"
  }
}

module "ECS" {
  source = "../modules/ECS"
}
