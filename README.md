# Sample Application

---

#### Tools 
Tools           | Versions
---------       | ------
Ruby            | 2.7.1
Ruby on Rails   | 6.1.4
React           | 17.0.2
Postgress       | 13.3
<br>

#### Notes
This project demonstrates two ways of implementing React+Rails applications.  
* The first the magazine using Single Page Application(SPA), built using react and redux to manage state.  
* The second the admin using react components along with react_on_rails gem (indicated by the react documentation).  
`(The admin was built entirely using components for demonstrative purposes, but the ideal use   
is in the use of complex components that need state management, using Context)`
<br>





## Running Locally

--- 


### Building application

> docker-compose up -d

Five containers will be created 
1. **web** - our application
2. **webpack_dev_server** - responsible for compiling javascript
3. **database** - instance of Postgres
4. **pd-admin** - postgres tools
5. **db-migrator** - responsible for keep migratings up-to-date


### Javascript Configuration

The SPA javascript application has a configuration file that must be filled in for it to work properly. 
You can find a version of this file at:  
`app/javascript/components/config/config.json.example`  
Fill in the fields and change the file name to  "config.json" only.

### DataBase

The project includes a container responsible for the migration of the development bank.  

_**Seeding**_

> docker-compose exec web bundle exec rails db:seed

_**Three users are provided with the seed:**_
> user: 'admin@gmail.com' , password: '123456', role: admin     
> user: 'staff@gmail.com' , password: '123456', role: staff   
> user: 'user@gmail.com' , password: '123456', role: user   



## Architecure Decisions

---

### Authentication

**SPA authentication** - The _**DoorKepper**_ gem was used to perform authentication with _Oauth2_, 
which gives the project the ability to use JWT authentication with Bearer token (in addition 
to other benefits such as WhiteListing, Revoking and Refresh tokens).  


**Admin** - Gem Devise and sessions

### Authorization
The _**CanCanCan**_ gem was used to set the access levels abilities.

`Access Abilities were defined based on resources rather than user.`

### Pagination and serialization
It was used the gems Kaminari for pagination, and jsonapi-serializer for serialization.

Serializers can be found at "app/serializers".  
A pagination module was created for both api and standard scope.

### Api Versioning

The routes and api classes were created in separate modules, making versioning easier, 
we can add a v2 without problems, continuing with the compatibility of the old integrated applications.

    |   ├── api
    |   |   ├── application_controler.rb  (extends ActionController::API, sets serializer and doorkeeper auth)
    |   |   ├── pages_controller.rb  (used to render SPA)
    |   |   └── v1 (version 1 of api domain)
    |   |   |   ├── bottles_controller.rb
    |   |   |   └── users_controller.rb
    |   |   └── v2 (version 1 of api domain)
    |   |   |   ├── bottles_controller.rb
    |   |   |   └── users_controller.rb


### Folder structure defined

* `app/authorization`: CanCanCan authorization abilities.


* `app/config/initializers`:  Serializers classes responsible for collection serialization.
    <details>
      <summary>Initializers structure</summary>

        ..
        ├── config
        |   ├── initializers
        |  ...  ├── doorkeeper.rb (doorkeeper configuration)
        |      ...
        ..
    </details>


* `app/controllers`: Controllers are split by domain, default at '/' and api at 'api/*'.
    <details>
  <summary>Controllers structure</summary>

      ├── app
      |  ...
      |   ├── controllers
      |   |   ├── api
      |   |   |   ├── application_controler.rb  (extends ActionController::API, sets serializer and doorkeeper auth)
      |   |   |   ├── pages_controller.rb  (used to render SPA)
      |   |   |   └── v1 (version 1 of api domain)
      |   |   |       ├── bottles_controller.rb
      |   |   |       ├── plans_controller.rb
      |   |   |       ├── units_controller.rb
      |   |   |       └── users_controller.rb 
      |   |   |
      |   |   ├── application_controler.rb (extends ActionController::Base)
      |   |   ├── bottles_controller.rb
      |   |   ├── plans_controller.rb
      |   |   ├── units_controller.rb
      |   |   ├── users
      |   |   |   └── session_controller.rb (added just to set respectfull layout)
    .. ... ...
    </details>


* `app/controllers/concerns`: Module Concerns are split by domain, default at '/' and api at 'api/*'.
    <details>
      <summary>Controllers concers structure</summary>
    
        .. ... ...
        |   ├── controllers
        |   |   ├── concerns
        |   |   |   ├── api (module concerns related to api domain)
        |   |   |   |   ├── error_handler.rb
        |   |   |   |   └── pagination.rb
        |   |   |   └── pagination.rb 
        .. ... ...
    </details>


* `app/db`:  DataBase migrations and seeding files.
    <details>
      <summary>Seeds structure</summary>

        .. 
        ├── db
        |   ├── seeds.rb 
        |   └── seeds
        |       ├── 001_doorkeeper_applications.rb
        |       ├── 002_unit.rb
        |       ├── 003_user.rb
        |       ├── 004_bottle.rb
        |       └── 005_plan.rb
        ..
    </details>


* `app/helpers`: Helper methods used to pass down props to components.


* `app/javascript/components`: JavaScript Application SPA and admin.
    <details>
      <summary>Javascript SPA structure</summary>
  
        .. ... ...
        ├── javascript
        |   ├── admin (Components from scope Admin server)
        |   |    
        |   ├── components (components shared across higher components(pages, layouts...))
        |   |    
        |   ├── config (principal configurations)
        |   |   ├── config.json.example (**configuration keys file example**)
        |   |   └── routes              (**file with routes configuration**) 
        |   |    
        |   ├── pages  (pages loaded by app) 
        |   |    
        |   ├── services  (auth, register and resource services) 
        |   |    
        |   ├── store  (resource stores and reducer) 
        |   |    
        |   └── utils  (auth.js, deserializer.js, history.js) 
        .. ...
    </details>
    <details>
      <summary>Javascript Admin structure</summary>
  
        .. ... ...
        ├── javascript
        |   ├── components 
        |   |   ├── admin (compents related to admin scope)
        |   |   |   ├── components (components shared across higher components(layout, pages, forms)
        |   |   |   |   ├── DataGrid (component used to present data and its SubComponents)
        |   |   |   |   ├── Forms (Form components loaded on show)
        |   |   |   |   ├── Layout 
        |   |   |   |   └── Pagination  (component)
        |   |   |   |   
        |   |   |   └── pages (Page Components)
        |   |   |   |   ├── index.js    (export)
        |   |   |   |   ├── Bottles     (component)
        |   |   |   |   ├── Login       (component)
        |   |   |   |   ├── Plans       (component)
        |   |   |   |   ├── Register    (component)
        |   |   |   |   └── Units       (component)
        .. ...
    </details>
* `app/models/concerns`: Model validations concerns modules.


* `app/serializers`:  Serializers classes responsible for collection serialization.
    <details>
      <summary>Serializers structure</summary>
    
        .. 
        ├── app
        |  ...
        |   ├── serializers
        |   |   ├── BottleSerializer.rb
        |   |   ├── UnitSerializer.rb
        |   |   └── PlanSerializer.rb
        ..
    </details>

## Notes

**SPA routes**
The routes used on SPA application are documented at [Documentation](https://documenter.getpostman.com/view/12317309/TzzEoa8R)

**Caching**  

It makes sense to cache API index actions since it does not often change.  What would improve the performance.

API::ActionController does not support the action_support caching gems (page and action), so it has to be done using low-level caching.

You can find an example of this implementation at this sample project:
https://github.com/caueguedes/qconcursos-challenge

at the file:
https://github.com/caueguedes/qconcursos-challenge/blob/master/app/controllers/questions_controller.rb

**Client side Caching**  

The react component "reselector" was used, which prevents the same query from being done twice in a row.  
We can also make a cache on the client side preventing it from remaking previously executed requests using "re-reselect".

**Lazzy loading importing**  

It was used LazyLoading components import, what makes the import of these components to be performed in smaller chunks 
making the application load more efficient.

## To-dos

Implement image uploader component using lambda function (action_storage is an option on uploading content, but it does not support asynchronous works, which increases the response time and server disponibility)
