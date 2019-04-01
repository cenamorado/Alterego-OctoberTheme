<?php namespace Five04\BlogExt\Models;

use Model;
use BackendAuth;
use RainLab\Blog\Models\Post;
use Backend\Models\User;

/**
 * PostDetails Model
 */
class PostDetails extends Model
{
    /**
     * @var string The database table used by the model.
     */
    use \October\Rain\Database\Traits\Validation;
    public $table = 'five04_blogext_post_details';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [];

    /**
     * @var array Relations
     */
    public $hasOne = [
    ];
    public $hasMany = [];
    public $belongsTo = [
        'post' => [ Post::class, 'table' => 'rainlab_blog_posts' ],
    ];
    public $belongsToMany = [];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [
        'galerie_images' => ['System\Models\File', 'order' => 'sort_order']
    ];
}
