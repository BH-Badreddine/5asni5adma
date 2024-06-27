# 5asni5adma
##### In this project, we collaborated to develop a web application that connects Algerian artisans with their customers. The platform allows artisans to create a "worker" account and post various ads detailing their offered services. Clients can browse through all available services, filter ads by province (wilaya), and search by service type...

### Cloning the repository

--> if you don't have virtualenv then install it :

```bash
pip install virtualenv
```

--> create the virtualenv :

```bash
virtualenv --python=python3.10.5 env
```

--> open the env in your terminal :

```bash
.\env\Scripts\activate
```

--> and then download the requirement for django :

```bash
pip install -r django_requirements.txt
```

now react requirements

--> go to frontend

```bash
cd frontend
```

--> and then :

```bash
npm install
```

--> in khasnikhadma/api
create folder name it migrations and inside it create a file name **init**.py

and then do :

```bash
python manage.py makemigrations
```
 
```bash
python manage.py migrate
```
