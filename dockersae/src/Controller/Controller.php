<?php

/* indique où "vit" ce fichier */
namespace App\Controller;

/* indique l'utilisation du bon bundle pour gérer nos routes */

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/* le nom de la classe doit être cohérent avec le nom du fichier */
class Controller
{
    // L'attribute #[Route] indique ici que l'on associe la route
    // "/" à la méthode home() pour que Symfony l'exécute chaque fois
    // que l'on accède à la racine de notre site.

    #[Route('/', name: 'home')]
    public function home()
    {
        die("home");
        
    }

    #[Route('/test', name: 'test')]
    public function test()
    {
        return new Response('<html><body><h1>Test Page</h1><p>This is a test page.</p></body></html>');
        
    }

    #[Route('/me', name: 'home')]
    public function me()
    {
        $response = new Response("hello");
        return $response;
        
    }
}