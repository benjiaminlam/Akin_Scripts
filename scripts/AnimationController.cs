using UnityEngine;
using System.Collections;
public class AnimationController : MonoBehaviour {
	
	private tk2dAnimatedSprite sprite;
	
	void Awake ()
	{
		if(!sprite)
			sprite = this.GetComponent<tk2dAnimatedSprite>();
	}
	
	//DidLand and DidJump are method receivers for the 'SendMessage' method in Platform Controller
	void DidJump ()
	{
		sprite.Play(0);
		audio.pitch = Random.Range(0.7f,1.3f);
		audio.Play();

	}
	
	void DidLand ()
	{
		sprite.Play(1);
	}
}