<?php

/**
 * seeder/database seeder.php
 * 
 * 
 * Comment by Daberechi codesmiles
 * seeders generates dummy data for your database table you can check examples of how it works by 
 * uncommenting line 26 and running 
 * php artisan db:seed
 * 
 * anytime You want to refresh your migration in order to Lemme use the word make a put request on your data tables 
 * in your database you will run
 *  php artisan migrate:refresh
 */ 


//  ----------------------------------------------------------------
// route/web.php
/*
 in the process if setting your laravel web app after installing composer and xampp
 then create new project by using composer create-project laravel/laravel myproject
 and setup your mysql database
 then on your terminal generate key with "php artisan key:generate" make sure your terminal is on the file directory
 then set up your database in your .env file
 then type "php artisan serve"
also remember that php must be present globaly un your local machine
*/

// home routes
Route::get('/', function () {
    return view('listings', [
        'heading' => "latest listings",
        "listings" =>[
            [
                "id" => 1,
                "title" => "listing 1",
                "description" => "lorem ipsum dolor sit amet",
            ],
            [
                "id" => 2,
                "title" => "listing 2",
                "description" => "lorem ipsum dolor sit amet 2",
            ]
            ]
    ]);
});

// find single list route
Route::get("/single-list/{id}",function($id){
    return view("listing",[
        'listing'=>Lists::find($id)
    ]);
});



// PRACTICE
Route::get("/hello", function () {
    return response("<h1>welcome to laravel where absolute shit happens</h1>")
        ->header('content-type', "text/plain")
        ->header('foo', "bar");
});

Route::get("/post/{id}", function ($id) {
    ddd($id);
    return response("post id is " . $id);
})->where("id", "[0-9]+"); // id is referncing the wildcard or in express dynamic route

Route::get("/search", function (Request $request) { // receiving data from the parameter for use
    return $request->name . " " . $request->city; // if the parameters in the browser is being queried for name and city (?name=mike&city=lagos)
});// Question is whats the difference with this request anf wild card

// ______________________________________________________________________________________
// route/api.php
Route::get("/posts", function () {
    return response()->json([
        "posts" => [
            [
                "title" => "Post One"
            ]
        ]
    ]);
});

// __________________________________________________________________
// one data migration folder
// database/migrations/create list table.php

/**
 * Comment by daberechi codesmiles
 * You can make migration aka creating your schema like in express with this command
 * php artisan make:migration "your table name"
 * after that 
 * run php artisan migrate
 * also dont forget that you should fill the database info into the .env file so that laravel will be able to recognize your local database
 */
Schema::create('lists', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->string('tags');
    $table->string('company');
    $table->string('location');
    $table->string('email');
    $table->string('website');
    $table->longText("description");
    $table->timestamps();
});
// ________________________________________________________________________________
// listing.blade.php
{{-- BLADE FOREACH --}}
@foreach ($listings as $listing)
<h2>{{$listing["title"]}}</h2>
<p>{{$listing["description"]}}</p>
@endforeach
// ___________________________________________________________________________________
// listings.blade.php
<h1>LISTINGS</h1>
<h1>{{$heading}}</h1>
{{-- BLADE IF you can also go ahead and use the unless statemaent--}}
@if (count($listings) == 0)
<h1>No listings found</h1>
@endif

{{-- BLADE FOREACH --}}
@foreach ($listings as $listing)
<h2><a href="/listings/{{$listing['id']}}">{{$listing["title"]}}</a></h2>
<p>{{$listing["description"]}}</p>
@endforeach

// TO CREATE FACTORIES
// php make:factory listingFactory
?>