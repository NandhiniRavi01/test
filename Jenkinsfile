pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "python-app"
        APP_CONTAINER = "python-app"
        APP_URL = "http://34.182.43.12:5000" // Use VM IP
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo '📥 Checking out source code'
                checkout scm
            }
        }

        stage('Verify Docker & Compose on VM') {
            steps {
                sshagent(['docker-vm-ssh']) {
                    sh 'ssh -o StrictHostKeyChecking=no student-03-ac99854a89d2@34.182.43.12 "docker --version && docker compose version"'
                }
            }
        }

        stage('Build Image on VM') {
            steps {
                sshagent(['docker-vm-ssh']) {
                    sh 'scp -r . student-03-ac99854a89d2@34.182.43.12:~/app'
                    sh 'ssh -o StrictHostKeyChecking=no student-03-ac99854a89d2@34.182.43.12 "cd ~/app && docker compose build"'
                }
            }
        }

        stage('Run Container on VM') {
            steps {
                sshagent(['docker-vm-ssh']) {
                    sh 'ssh -o StrictHostKeyChecking=no student-03-ac99854a89d2@34.182.43.12 "cd ~/app && docker compose up -d"'
                }
            }
        }

        stage('Wait for Application') {
            steps {
                sshagent(['docker-vm-ssh']) {
                    retry(5) {
                        sh "ssh -o StrictHostKeyChecking=no student-03-ac99854a89d2@34.182.43.12 'curl -f ${APP_URL}' || exit 1"
                        sleep 5
                    }
                }
            }
        }

        stage('Test Application') {
            steps {
                sshagent(['docker-vm-ssh']) {
                    sh "ssh -o StrictHostKeyChecking=no student-03-ac99854a89d2@34.182.43.12 'curl --fail ${APP_URL}'"
                }
            }
        }
    }

    post {
        always {
            sshagent(['docker-vm-ssh']) {
                sh 'ssh -o StrictHostKeyChecking=no student-03-ac99854a89d2@34.182.43.12 "docker system prune -af || true"'
            }
        }

        success {
            echo '✅ Python application deployed and tested successfully on VM'
        }

        failure {
            echo '❌ Pipeline failed – check Jenkins logs'
        }
    }
}
