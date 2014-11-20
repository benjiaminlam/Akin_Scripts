#pragma strict

function OnTriggerEnter (other : Collider) {
		if(other.gameObject.tag =="enemy"){
		BoyAnimationController.isDeath=1;
		CreatureAnimationController.isDeath=1;
		Destroy(other.gameObject);
		yield WaitForSeconds(1);
        //characterPhysics.enabled = false;
        gameObject.Find("player").transform.position=gameObject.Find("Respawn").transform.position;
        gameObject.Find("player2").transform.position=gameObject.Find("Respawn2").transform.position;
        //Destroy(other.gameObject);
        HUD_heal_change.heal-=1;
        BoyAnimationController.isDeath=0;
        CreatureAnimationController.isDeath=0;
        //yield WaitForSeconds(1);
        //transform.position = greenInitPosition.position;
        //characterPhysics.enabled = true;
        Debug.Log(HUD_heal_change.heal);
    }
    if(HUD_heal_change.heal<=0)
    {
        HUD_heal_change.heal=0;
        Application.LoadLevel("GameOver");
    }
}
	