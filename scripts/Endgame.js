#pragma strict

function OnTriggerEnter(collision:Collider)
{
	if(collision.gameObject.tag=="Player")
	{
		Application.LoadLevel("Win");

	}
}