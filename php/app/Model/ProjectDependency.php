<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

App::uses('AppModel', 'Model');

/**
 * CakePHP ProjectDependencies
 * @author Michel
 */
class ProjectDependency extends AppModel {
    
    public $belongsTo = array(
        'Project' => array(
            'className' => 'Project',
            'foreignKey' => 'id_project'
        )
    );
    
}
