#pragma strict
 //var target : Transform;
 
 var moveSpeed:float = 3.0f;
 var rotationSpeed:float =3.0f;
 var distanceBetween:float = 3.0f;
 function Start()
 {
   
 }
 
 function Update()
 {
   
    var dir=Vector3.Distance(gameObject.Find("player").transform.position, gameObject.Find("player2").transform.position);
   
    if(dir > distanceBetween)
    {
       gameObject.Find("player2").transform.rotation = Quaternion.Slerp(gameObject.Find("player2").transform.rotation, 
       Quaternion.LookRotation(gameObject.Find("player").transform.position-gameObject.Find("player2").transform.position), rotationSpeed * Time.deltaTime);
       gameObject.Find("player2").transform.position += gameObject.Find("player2").transform.forward * moveSpeed * Time.deltaTime;
    }
 }