pipeline {
    agent any

    // Koppel de Node.js installatie die in Jenkins is geconfigureerd
    tools {
        nodejs 'Node20' // Zorg dat de naam overeenkomt met je Jenkins Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                // Haalt de code van GitHub
                checkout scm
            }
        }
        
        stage('Install & Build') {
            steps {
                // Installeer dependencies en bouw het project (overslaan als het een simpele HTML/CSS site is)
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Deploy to Apache') {
            steps {
                // Kopieer de gebouwde bestanden naar de Apache directory
                // Als het een simpele static site is zonder build, gebruik dan: sh 'rsync -avz --exclude=".git" . /var/www/html/'
                sh 'rsync -avz --no-o --no-g --omit-dir-times dist/ /var/www/portfolio/'
            }
        }
    }
}