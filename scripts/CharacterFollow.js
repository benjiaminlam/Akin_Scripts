#pragma strict
 //var target : Transform;
 
 var moveSpeed:float = 3.0f;
 var rotationSpeed:float =3.0f;
 function Start()
 {
   
 }
 
 function Update()
 {
   
    var dir=Vector3.Distance(gameObject.Find("Boy").transform.position, gameObject.Find("Creature").transform.position);
   
    if(dir > 3.0f)
    {
       gameObject.Find("Creature").transform.rotation = Quaternion.Slerp(gameObject.Find("Creature").transform.rotation, 
       Quaternion.LookRotation(gameObject.Find("Boy").transform.position-gameObject.Find("Creature").transform.position), rotationSpeed * Time.deltaTime);
       gameObject.Find("Creature").transform.position += gameObject.Find("Creature").transform.forward * moveSpeed * Time.deltaTime;
    }
 }