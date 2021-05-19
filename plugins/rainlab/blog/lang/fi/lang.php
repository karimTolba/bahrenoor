<?php

return [
    'plugin' => [
        'name' => 'Blogi',
        'description' => 'Vankka bloggausalusta.'
    ],
    'blog' => [
        'menu_label' => 'Blogi',
        'menu_description' => 'Hallitse blogipostauksia',
        'posts' => 'Postaukset',
        'create_post' => 'Blogipostaus',
        'categories' => 'Categories',
        'create_category' => 'Blogikategoria',
        'tab' => 'Blogi',
        'access_posts' => 'Hallitse postauksia',
        'access_categories' => 'Hallitse kategorioita',
        'access_other_posts' => 'Hallitse muiden käyttäjien postauksia',
        'access_import_export' => 'Saa tuoda ja viedä postauksia',
        'access_publish' => 'Saa julkaista postauksia',
        'manage_settings' => 'Manage blog settings',
        'delete_confirm' => 'Olteko varma?',
        'chart_published' => 'Julkaistu',
        'chart_drafts' => 'Luonnokset',
        'chart_total' => 'Yhteensä',
        'settings_description' => 'Hallinnoi blogin asetuksia',
        'show_all_posts_label' => 'Näytä kaikki postaukset ylläpitäjille',
        'show_all_posts_comment' => 'Näytä molemmat sekä julkaistut että julkaisemattomat postaukset ylläpitäjille',
        'tab_general' => 'Yleiset'
    ],
    'posts' => [
        'list_title' => 'Hallitse blogipostauksia',
        'filter_category' => 'Kategoria',
        'filter_published' => 'Julkaistu',
        'filter_date' => 'Päivämäärä',
        'new_post' => 'Uusi postaus',
        'export_post' => 'Vie postaukset',
        'import_post' => 'Tuo postauksia'
    ],
    'post' => [
        'title' => 'Otsikko',
        'title_placeholder' => 'Uuden postauksen otsikko',
        'content' => 'Sisältö',
        'content_html' => 'HTML Sisältö',
        'slug' => 'Slugi',
        'slug_placeholder' => 'uuden-postaukse-slugi',
        'categories' => 'Kategoriat',
        'author_email' => 'Tekijän sähköposti',
        'created' => 'Luotu',
        'created_date' => 'Luomispäivämäärä',
        'updated' => 'Muokattu',
        'updated_date' => 'Muokkauspäivämäärä',
        'published' => 'Julkaistu',
        'published_by' => 'Published by',
        'current_user' => 'Current user',
        'published_date' => 'Julkaisupäivämäärä',
        'published_validation' => 'Määrittele julkaisupäivämäärä',
        'tab_edit' => 'Muokkaa',
        'tab_categories' => 'Kategoriat',
        'categories_comment' => 'Valitse kategoriat joihin postaus kuuluu',
        'categories_placeholder' => 'Kategorioita ei ole, sinun pitäisi luoda ensimmäinen ensin!',
        'tab_manage' => 'Hallitse',
        'published_on' => 'Julkaistu',
        'excerpt' => 'Poiminto',
        'summary' => 'Yhteenveto',
        'featured_images' => 'Esittelykuvat',
        'delete_confirm' => 'Poista tämä postaus?',
        'delete_success' => 'Postaukset poistettu onnistuneesti.',
        'close_confirm' => 'Tämä postaus ei ole tallennettu.',
        'return_to_posts' => 'Palaa postauslistaan'
    ],
    'categories' => [
        'list_title' => 'Hallitse blogikategorioita',
        'new_category' => 'Uusi kategoria',
        'uncategorized' => 'Luokittelematon'
    ],
    'category' => [
        'name' => 'Nimi',
        'name_placeholder' => 'Uuden kategorian nimi',
        'description' => 'Kuvaus',
        'slug' => 'Slugi',
        'slug_placeholder' => 'uuden-kategorian-slugi',
        'posts' => 'Julkaisuja',
        'delete_confirm' => 'Poista tämä kategoria?',
        'delete_success' => 'Kategoriat poistettu onnistuneesti.',
        'return_to_categories' => 'Palaa blogikategorialistaan',
        'reorder' => 'Järjestä kategoriat uudelleen'
    ],
    'menuitem' => [
        'blog_category' => 'Blogikategoria',
        'all_blog_categories' => 'Kaikki blogikategoriat',
        'blog_post' => 'Blogipostaukset',
        'all_blog_posts' => 'Kaikki blogipostaukset',
        'category_blog_posts' => 'Blogin kategorian postaukset'
    ],
    'settings' => [
        'category_title' => 'Kategorialista',
        'category_description' => 'Näyttää listan blogikategorioista sivulla.',
        'category_slug' => 'Kategorian slugi',
        'category_slug_description' => 'Etsii blogikategorian käyttämällä annettua slugi-arvoa. Komponentti käyttää tätä merkitsemään aktiivisen kategorian.',
        'category_display_empty' => 'Näytä tyhjät kategoriat',
        'category_display_empty_description' => 'Näytä kategoriat joilla ei ole yhtään postauksia.',
        'category_page' => 'Kategoriasivu',
        'category_page_description' => 'Kategorialistaussivun tiedostonimi. Oletuskomponenttiosa käyttää tätä ominaisuutta.',
        'post_title' => 'Postaus',
        'post_description' => 'Näyttää blogipostauksen sivulla.',
        'post_slug' => 'Postauksen slugi',
        'post_slug_description' => 'Etsii blogipostauksen käyttämällä annettua slugi-arvoa.',
        'post_category' => 'Kategoriasivu',
        'post_category_description' => 'Kategorialistaussivun tiedostonimi. Oletuskomponenttiosa käyttää tätä ominaisuutta.',
        'posts_title' => 'Lista postauksista',
        'posts_description' => 'Näyttää listan uusimmista blogipostauksista sivulla.',
        'posts_pagination' => 'Sivunumero',
        'posts_pagination_description' => 'Tätä arvoa käytetään määrittämään millä sivulla käyttäjä on.',
        'posts_filter' => 'Kategoriasuodatin',
        'posts_filter_description' => 'Lisää kategorian slugi tai URL parametri, jolla suodattaa postauksia. Jätä tyhjäksi näyttääksesi kaikki postaukset.',
        'posts_per_page' => 'Postauksia per sivu',
        'posts_per_page_validation' => 'Postauksia per sivu -kohta sisältää kelvottoman arvon',
        'posts_no_posts' => 'Ei julkaisuja -viesti',
        'posts_no_posts_description' => 'Viesti, joka näytetään silloin kun postauksia ei ole. Oletuskomponenttiosa käyttää tätä ominaisuutta.',
        'posts_no_posts_default' => 'Ei postauksia',
        'posts_order' => 'Postauksien järjestys',
        'posts_order_description' => 'Attribuutti, jonka mukaan postaukset tulisi järjestää',
        'posts_category' => 'Kategoriasivu',
        'posts_category_description' => 'Kategoriasivun tiedosto "Julkaistu kohteeseen" kategorialinkkejä varten. Oletuskomponenttiosa käyttää tätä ominaisuutta.',
        'posts_post' => 'Postaussivu',
        'posts_post_description' => 'Blogisivun tiedostonimi "Lue lisää" linkkejä varten. Oletuskomponenttiosa käyttää tätä ominaisuutta.',
        'posts_except_post' => 'Poissulje postauksia',
        'posts_except_post_description' => 'Lisää postauksen ID/URL tai muuttuja, jonka haluat poissulkea',
        'posts_except_post_validation' => 'Postaukset poikkeukset täytyy olla yksittäinen slugi tai ID, pilkulla erotettu slugi-lista ja ID:t',
        'posts_except_categories' => 'Poikkeavat kategoriat',
        'posts_except_categories_description' => 'Lisää pilkulla erotettu listaus kategoria slugeista tai listaus kategorioista jotka haluat jättää ulkopuolelle',
        'posts_except_categories_validation' => 'Poikkeavat kategoriat ovat oltava yksittäinen kategoria slugi tai pilkulla erotettu listaus slugeista',
        'rssfeed_blog' => 'Blogisivu',
        'rssfeed_blog_description' => 'Blogisivun tiedostonimi linkkien generointia varten. Oletuskomponenttiosa käyttää tätä ominaisuutta.',
        'rssfeed_title' => 'RSS syöte',
        'rssfeed_description' => 'Generoi RSS syötteen sisältäen postaukset blogista.',
        'group_links' => 'Linkit',
        'group_exceptions' => 'Poikkeukset'
    ],
    'sorting' => [
        'title_asc' => 'Otsikko (ascending)',
        'title_desc' => 'Otsikko (descending)',
        'created_asc' => 'Luotu (ascending)',
        'created_desc' => 'Luotu (descending)',
        'updated_asc' => 'Päivitetty (ascending)',
        'updated_desc' => 'Päivitetty (descending)',
        'published_asc' => 'Julkaistu (ascending)',
        'published_desc' => 'Julkaistu (descending)',
        'random' => 'Satunnainen'
    ],
    'import' => [
        'update_existing_label' => 'Päivitä olemassa olevat postaukset',
        'update_existing_comment' => 'Valitse tämä laatikko päivittääksesi postaukset, joissa on täsmälleen sama ID, otsikko tai slugi.',
        'auto_create_categories_label' => 'Luo tuotavassa tiedostossa määritellyt kategoriat.',
        'auto_create_categories_comment' => 'Sinun tulisi yhdistää Kategoriat-sarake käyttääksesi tätä toiminnallisuutta. Muussa tapauksessa valitse oletuskategoria alapuolelta.',
        'categories_label' => 'Kategoriat',
        'categories_comment' => 'Valitse kategoriat, joihin tuotavat postaukset liitetään (option).',
        'default_author_label' => 'Oletuskirjoittaja (optio)',
        'default_author_comment' => 'Tuonti yrittää käyttää Kirjoittaja tiedon sähköpostia yhdistäessään kirjoittajaa. Muussa tapauksessa käytetään ylempänä määriteltyä.',
        'default_author_placeholder' => '-- valitse kirjoittaja --'
    ]
];
