pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "python-app"
        APP_CONTAINER = "python-app"
        PATH = "/usr/local/bin:${env.PATH}"
        APP_URL = "http://localhost:5000"
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo '📥 Checking out source code'
                checkout scm
            }
        }

        stage('Verify Docker & Compose') {
            steps {
                echo '🔍 Verifying Docker installation'
                sh 'docker --version'
                sh 'docker compose version'
            }
        }

        stage('Build Image') {
            steps {
                echo '🐳 Building Docker image using Docker Compose'
                sh 'docker compose build'
            }
        }

        stage('Run Container') {
            steps {
                echo '🚀 Starting Python application container'
                sh 'docker compose up -d'
            }
        }

        stage('Wait for Application') {
            steps {
                echo '⏳ Waiting for Python app to be ready'
                retry(5) {
                    sleep 5
                    sh "curl -f ${APP_URL}"
                }
            }
        }

        stage('Test Application') {
            steps {
                echo '🧪 Testing Python Flask API'
                sh "curl --fail ${APP_URL}"
            }
        }
    }

    post {
        always {
            echo '🧽 Pruning unused Docker resources'
            sh 'docker system prune -af || true'
        }

        success {
            echo '✅ Python application deployed and tested successfully'
        }

        failure {
            echo '❌ Pipeline failed – please check Jenkins logs'
        }
    }
}
