### Redux, React and Karma authRedux
-----
+ Uses webpack and express to serve devEnv
+ Node js and react for UI designing
+ Bootstrapped for components styling 
+ Redux boiler plate
+ Karma installed and optimized for fast unit testing  


+ Higher ordrer components utilization in app

what the higher component is doing is allowing auth process in selected
components by doing inside the ``router``:

``<Route path="/resources" component={Auth(Resources)} />
<Route path="/users" component={Auth(UserList)} /> ``

`` Author = () => { Sebtn } ``