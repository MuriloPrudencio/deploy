pipeline {
  agent any
  tools {nodejs "Node-Suprema-Brazil"}
   environment {
    scannerHome = tool 'sonarqubescanner'
  }
  stages {
		stage('Start') {
		  steps {
			 echo 'Start Build Suprema-Brazil'
		  }
		}

        stage('Install Dependency') {
		  steps {
		  	 echo 'Install Dependency'
			 powershell "npm install --cache"
		  }
	   }

		stage('Build') {
		  steps {
		  	 echo 'Building'
			 powershell "npm run build"
		  }
	   }

       stage('Sonar') {
           tools {
                nodejs 'Node-Suprema-Brazil'
           }
           steps {  
             withSonarQubeEnv('SonarSuprema') {
              bat "${scannerHome}\\bin\\sonar-scanner.bat"
             }          
           }
	   } 	
   }
}