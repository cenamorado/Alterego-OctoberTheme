<?php namespace Five04\BlogExt;

use System\Classes\PluginManager;
use BackendAuth;
use Backend;
use Db;
use Backend\Models\User;
use System\Classes\PluginBase;
use RainLab\Blog\Models\Post as PostModel;
use RainLab\Blog\Controllers\Posts as PostController;
use Five04\BlogExt\Models\PostDetails;

/**
 * BlogExt Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */

    public function pluginDetails()
    {


        return [
            'name'        => 'BlogExt',
            'description' => 'BlogExt is a extenxion for a RainLab Blog , to add bakedn Author or Custon Author , Galerie Images,Subtitle',
            'author'      => 'Five04',
            'icon'        => 'icon-leaf'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {

        \Event::listen('backend.form.extendFields', function ($widget) {
            if (PluginManager::instance()->hasPlugin('RainLab.Blog') && $widget->model instanceof PostModel) {
                $widget->addFields([
                    'user' => [
                        'label'   => 'Author',
                        'tab'     => 'Details',
                        'type'    => 'relation',
                        'select'  => 'first_name',
                        'emptyOption' => 'Disable',
                        'span' => 'auto'
                    ],
                    // 'author' => [
                    //     'label'   => 'Author',
                    //     'tab'     => 'Details',
                    //     'type'    => 'Text',
                    //     'span' => 'auto'
                    // ],
                    'subtitle' => [
                        'label'   => 'Person',
                        'type'    => 'text',
                        'tab'     => 'Details',
                        'span' => 'auto'
                    ],
                    'galerie_images' => [
                        'type'    => 'fileupload',
                        'label'   => 'Galeria de Imagenes',
                        'mode'    => 'image',
                        'span'    => 'auto',
                        'tab'     => 'Details',
                    ],
                    'views' => [
                        'label'   => 'Views',
                        'type'    => 'text',
                        'tab'     => 'Details',
                        'span' => 'auto',
                        'disabled' => true,
                    ]
                ], 'secondary');
            }
        });
    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {
        PostModel::extend(function ($model) {
            $model->attachMany['galerie_images'] = [\System\Models\File::class];
            $model->bindEvent('model.beforeDelete', function () use ($model) {
                $model->profile && $model->profile->delete();
            });
        });
    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        return []; // Remove this line to activate

        return [
            'Five04\BlogExt\Components\MyComponent' => 'myComponent',
        ];
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        return []; // Remove this line to activate

        return [
            'five04.blogext.some_permission' => [
                'tab' => 'BlogExt',
                'label' => 'Some permission'
            ],
        ];
    }

    /**
     * Registers back-end navigation items for this plugin.
     *
     * @return array
     */
    public function registerNavigation()
    {
        return []; // Remove this line to activate

        return [
            'blogext' => [
                'label'       => 'BlogExt',
                'url'         => Backend::url('five04/blogext/mycontroller'),
                'icon'        => 'icon-leaf',
                'permissions' => ['five04.blogext.*'],
                'order'       => 500,
            ],
        ];
    }
}
