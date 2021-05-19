<?php namespace Character\Special\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableDeleteCharacterSpecial extends Migration
{
    public function up()
    {
        Schema::dropIfExists('character_special_');
    }
    
    public function down()
    {
        Schema::create('character_special_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('name', 191);
            $table->string('age', 191);
            $table->text('address');
        });
    }
}
