<?php namespace Five04\BlogExt\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;
use System\Classes\PluginManager;

class CreatePostDetails extends Migration
{

    public function up()
    {
        if(PluginManager::instance()->hasPlugin('RainLab.Blog'))
        {
            Schema::table('rainlab_blog_posts', function($table)
            {
                $table->string('author')->nullable();
                $table->string('subtitle')->nullable();
            });
        }
    }

    public function down()
    {
        // if(PluginManager::instance()->hasPlugin('RainLab.Blog'))
        // {
        //     Schema::table('rainlab_blog_posts', function($table)
        //     {
        //         $table->dropColumn('author');
        //         $table->dropColumn('subtitle');
        //     });
        // }

    }

}
