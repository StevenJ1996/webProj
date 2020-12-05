pipeline {
   agent any
   
   tools {nodejs "node"}

   stages {
      stage('clone the repo') {
         steps {
            git 'https://github.com/StevenJ1996/webProj'
         }
      }
      
      stage('Install dependencies') {
         steps {
            sh 'npm install'
         }
      }
      
     stage('run test') {
         steps {
            sh 'headless=true npm run test'
         }
      }
   }
}