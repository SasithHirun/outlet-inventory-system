<?php
/**
 * Direct WooCommerce 20 Fire Extinguisher Products Importer
 * Usage: Paste into functions.php or run once via WP Code Snippets plugin.
 * Automatically inserts 20 products into WooCommerce with price, images, SKUs, and categories.
 */

add_action('admin_init', 'ppf_import_20_fire_extinguishers_once');

function ppf_import_20_fire_extinguishers_once() {
    if (!isset($_GET['run_ppf_fe_import']) || $_GET['run_ppf_fe_import'] !== 'yes') {
        return;
    }
    if (!current_user_can('manage_woocommerce')) {
        wp_die('Unauthorized user');
    }

    $products = [
    {
        "id": "",
        "type": "simple",
        "sku": "S10062201",
        "name": "6KG Automatic Dry Chemical Powder Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>Ceiling Mounted Automatic Powder Fire Extinguishers are designed for installation in larger areas where an increased discharge range is required.</li>\n</ul>",
        "description": "<p><ul>\n<li>Ceiling Mounted Automatic Powder Fire Extinguishers are designed for installation in larger areas where an increased discharge range is required.</li>\n</ul></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "199.50",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/6KG-Automatic-Dry-Chemical-Powder-1.jpg",
        "filterCategory": "automatic",
        "categoryLabel": "Automatic / Ball"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S07062605",
        "name": "9KG Automatic Dry Chemical Powder Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>Ceiling Mounted Automatic Powder Fire Extinguishers are designed for installation in larger areas where an increased discharge range is required.</li>\n</ul>",
        "description": "<p><ul>\n<li>Ceiling Mounted Automatic Powder Fire Extinguishers are designed for installation in larger areas where an increased discharge range is required.</li>\n</ul></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "199.50",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/6KG-Automatic-Dry-Chemical-Powder-1.jpg",
        "filterCategory": "automatic",
        "categoryLabel": "Automatic / Ball"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S0423001",
        "name": "AFO Fire Extinguisher Ball",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>Brand: AFO</li>\n<li>Model: AFO123</li>\n</ul>",
        "description": "<p><ul>\n<li>Brand: AFO</li>\n<li>Model: AFO123</li>\n</ul></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "94.50",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/AFO-FIre-Ball-1.jpg",
        "filterCategory": "automatic",
        "categoryLabel": "Automatic / Ball"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S0606007",
        "name": "Bristol FE6 6 Liters Foam Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>Foam Fire Extinguisher is a perfect solution for initial fires of fire classes A and B are these easily manageable foam extinguishers.</li>\n<li>BSI Kitemark Approved</li>\n<li>Model: FE6</li>\n<li>Fire Class: AB</li>\n<li>Capacity: 6 L</li>\n</ul>",
        "description": "<p><ul>\n<li>Foam Fire Extinguisher is a perfect solution for initial fires of fire classes A and B are these easily manageable foam extinguishers.</li>\n<li>BSI Kitemark Approved</li>\n<li>Model: FE6</li>\n<li>Fire Class: AB</li>\n<li>Capacity: 6 L</li>\n</ul></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "171.15",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/bristol-foam.jpg",
        "filterCategory": "foam",
        "categoryLabel": "Foam Extinguisher"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S0606008",
        "name": "Bristol FE9 9 Liters Foam Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>Foam Fire Extinguisher is a perfect solution for initial fires of fire classes A and B are these easily manageable foam extinguishers.</li>\n<li>BSI Kitemark Approved</li>\n<li>Model: FE9</li>\n<li>Fire Class: AB</li>\n<li>Capacity: 9 L</li>\n</ul>",
        "description": "<p><ul>\n<li>Foam Fire Extinguisher is a perfect solution for initial fires of fire classes A and B are these easily manageable foam extinguishers.</li>\n<li>BSI Kitemark Approved</li>\n<li>Model: FE9</li>\n<li>Fire Class: AB</li>\n<li>Capacity: 9 L</li>\n</ul></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "257.25",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/bristol-foam.jpg",
        "filterCategory": "foam",
        "categoryLabel": "Foam Extinguisher"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S0606002",
        "name": "Bristol WE6 6 Liters Water Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>Water Extinguishers are very effective against fires in furniture, fabrics, as well as deep-seated fires because it cools down the burning materials by absorbing the heat.</li>\n<li>BSI Kitemark Approved, Pressure Type</li>\n<li>Model: WE6</li>\n<li>Fire Class: A</li>\n<li>Capacity: 6 L</li>\n</ul>",
        "description": "<p><ul>\n<li>Water Extinguishers are very effective against fires in furniture, fabrics, as well as deep-seated fires because it cools down the burning materials by absorbing the heat.</li>\n<li>BSI Kitemark Approved, Pressure Type</li>\n<li>Model: WE6</li>\n<li>Fire Class: A</li>\n<li>Capacity: 6 L</li>\n</ul></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "171.15",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/bristol-6L.jpg",
        "filterCategory": "water",
        "categoryLabel": "Water Extinguisher"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S0606004",
        "name": "Bristol WE9 9 Liters Water Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>Water Extinguishers are very effective against fires in furniture, fabrics, as well as deep-seated fires because it cools down the burning materials by absorbing the heat.</li>\n<li>BSI Kitemark Approved, Pressure Type</li>\n<li>Model: WE9</li>\n<li>Fire Class: A</li>\n<li>Capacity: 9 L</li>\n</ul>",
        "description": "<p><ul>\n<li>Water Extinguishers are very effective against fires in furniture, fabrics, as well as deep-seated fires because it cools down the burning materials by absorbing the heat.</li>\n<li>BSI Kitemark Approved, Pressure Type</li>\n<li>Model: WE9</li>\n<li>Fire Class: A</li>\n<li>Capacity: 9 L</li>\n</ul></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "191.10",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/bristol-6L.jpg",
        "filterCategory": "water",
        "categoryLabel": "Water Extinguisher"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S0070",
        "name": "Fireguard 1kg Dry Chemical Powder Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>ABC or multipurpose fire extinguishers are multi-function extinguishers capable of extinguishing class A and class B fires.</li>\n<li>Dry Chemical Powder Fire Extinguisher 1Kg</li>\n</ul>",
        "description": "<p><ul>\n<li>ABC or multipurpose fire extinguishers are multi-function extinguishers capable of extinguishing class A and class B fires.</li>\n<li>Dry Chemical Powder Fire Extinguisher 1Kg</li>\n</ul></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "52.50",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/Fireguard-1-Kg-DCP.jpg",
        "filterCategory": "powder",
        "categoryLabel": "Dry Powder (DCP)"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S0016",
        "name": "Fireguard 2Kg Carbon Dioxide Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>Fireguard FGFC2 2Kg Carbon Dioxide Fire Extinguisher</li>\n<li>Carbon dioxide replaces the fire’s oxygen and, as the gas is contained under pressure it creates a cold discharge upon release, which removes the heat of the fire too. Works for Class B and C fires.</li>\n<li>Carbon Dioxide Fire Extinguisher 2Kg – FGFC2</li>\n</ul>\n<p>&nbsp;</p>\n<p>&nbsp;</p>",
        "description": "<p><ul>\n<li>Fireguard FGFC2 2Kg Carbon Dioxide Fire Extinguisher</li>\n<li>Carbon dioxide replaces the fire’s oxygen and, as the gas is contained under pressure it creates a cold discharge upon release, which removes the heat of the fire too. Works for Class B and C fires.</li>\n<li>Carbon Dioxide Fire Extinguisher 2Kg – FGFC2</li>\n</ul>\n<p>&nbsp;</p>\n<p>&nbsp;</p></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "147.00",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/Fireguard-2Kg-CO2.jpg",
        "filterCategory": "co2",
        "categoryLabel": "CO2 Extinguisher"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S100233-2",
        "name": "Fireguard 2Kg Dry Chemical Powder Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>ABC or multipurpose fire extinguishers are multi-function extinguishers capable of extinguishing class A and class B fires.</li>\n<li>Dry Chemical Powder Fire Extinguisher 2Kg</li>\n</ul>",
        "description": "<p><ul>\n<li>ABC or multipurpose fire extinguishers are multi-function extinguishers capable of extinguishing class A and class B fires.</li>\n<li>Dry Chemical Powder Fire Extinguisher 2Kg</li>\n</ul></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "78.75",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/2Kg-dcp-1.jpg",
        "filterCategory": "powder",
        "categoryLabel": "Dry Powder (DCP)"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S0001",
        "name": "Fireguard 4Kg Dry Chemical Powder Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>Fireguard FGP4R 4Kg Dry Chemical Powder Fire Extinguisher</li>\n<li>ABC or multipurpose fire extinguishers are multi-function extinguishers capable of extinguishing class A and class B fires.</li>\n<li>Dry Chemical Powder Fire Extinguisher 4Kg – FGP4R</li>\n</ul>\n<p>&nbsp;</p>",
        "description": "<p><ul>\n<li>Fireguard FGP4R 4Kg Dry Chemical Powder Fire Extinguisher</li>\n<li>ABC or multipurpose fire extinguishers are multi-function extinguishers capable of extinguishing class A and class B fires.</li>\n<li>Dry Chemical Powder Fire Extinguisher 4Kg – FGP4R</li>\n</ul>\n<p>&nbsp;</p></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "105.00",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/Fireguard-4kg-DCP-1.jpg",
        "filterCategory": "powder",
        "categoryLabel": "Dry Powder (DCP)"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S0017",
        "name": "Fireguard 5Kg Carbon Dioxide Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>Fireguard FGFC5 5Kg Carbon Dioxide Fire Extinguisher</li>\n<li>Carbon dioxide replaces the fire’s oxygen and, as the gas is contained under pressure it creates a cold discharge upon release, which removes the heat of the fire too. Works for Class B and C fires.</li>\n<li>Carbon Dioxide Fire Extinguisher 5Kg – FGFC5</li>\n</ul>\n<p>&nbsp;</p>\n<p>&nbsp;</p>",
        "description": "<p><ul>\n<li>Fireguard FGFC5 5Kg Carbon Dioxide Fire Extinguisher</li>\n<li>Carbon dioxide replaces the fire’s oxygen and, as the gas is contained under pressure it creates a cold discharge upon release, which removes the heat of the fire too. Works for Class B and C fires.</li>\n<li>Carbon Dioxide Fire Extinguisher 5Kg – FGFC5</li>\n</ul>\n<p>&nbsp;</p>\n<p>&nbsp;</p></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "262.50",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/Fireguard-5kg-CO2.jpg",
        "filterCategory": "co2",
        "categoryLabel": "CO2 Extinguisher"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S06022302",
        "name": "Fireguard 6 Liter Foam Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>Foam fire extinguishers provide a fast, powerful means of tackling class  A  and B fires.</li>\n<li>Foam Fire Extinguisher 6 Liters</li>\n</ul>\n<p>&nbsp;</p>",
        "description": "<p><ul>\n<li>Foam fire extinguishers provide a fast, powerful means of tackling class  A  and B fires.</li>\n<li>Foam Fire Extinguisher 6 Liters</li>\n</ul>\n<p>&nbsp;</p></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "136.50",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/6-Liter.jpg",
        "filterCategory": "foam",
        "categoryLabel": "Foam Extinguisher"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S09102501",
        "name": "Fireguard 6 Liter Water Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>Water extinguishers are reliable and effective general purpose extinguishers, providing a cost effective solution for tackling freely burning material, such as paper, cloth, wood and furniture.</li>\n<li>Water Fire Extinguisher 6 Liters</li>\n</ul>",
        "description": "<p><ul>\n<li>Water extinguishers are reliable and effective general purpose extinguishers, providing a cost effective solution for tackling freely burning material, such as paper, cloth, wood and furniture.</li>\n<li>Water Fire Extinguisher 6 Liters</li>\n</ul></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "102.90",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/Water-Fire-Extinguisher.jpg",
        "filterCategory": "water",
        "categoryLabel": "Water Extinguisher"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S0014",
        "name": "Fireguard 6kg Dry Chemical Powder Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>Fireguard FGFP6 6kg Dry Chemical Powder Fire Extinguisher</li>\n<li>ABC or multipurpose fire extinguishers are multi-function extinguishers capable of extinguishing class A and class B fires.</li>\n<li>Dry Chemical Powder Fire Extinguisher 6Kg – FGFP6</li>\n</ul>\n<p>&nbsp;</p>\n<p>&nbsp;</p>",
        "description": "<p><ul>\n<li>Fireguard FGFP6 6kg Dry Chemical Powder Fire Extinguisher</li>\n<li>ABC or multipurpose fire extinguishers are multi-function extinguishers capable of extinguishing class A and class B fires.</li>\n<li>Dry Chemical Powder Fire Extinguisher 6Kg – FGFP6</li>\n</ul>\n<p>&nbsp;</p>\n<p>&nbsp;</p></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "136.50",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/CO2-5kg-6kg-Fire-Extinguisher-1.jpeg",
        "filterCategory": "powder",
        "categoryLabel": "Dry Powder (DCP)"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S05112410-1",
        "name": "Fireguard 9 Liter Foam Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>Foam fire extinguishers provide a fast, powerful means of tackling class  A  and B fires.</li>\n<li>Foam Fire Extinguisher 9 Liters</li>\n</ul>",
        "description": "<p><ul>\n<li>Foam fire extinguishers provide a fast, powerful means of tackling class  A  and B fires.</li>\n<li>Foam Fire Extinguisher 9 Liters</li>\n</ul></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "157.50",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/11/FIreguard-9-Liter-Foam.jpg",
        "filterCategory": "foam",
        "categoryLabel": "Foam Extinguisher"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S01312401",
        "name": "Fireguard 9 Liter Water Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>Water extinguishers are reliable and effective general purpose extinguishers, providing a cost effective solution for tackling freely burning material, such as paper, cloth, wood and furniture.</li>\n<li>Water Fire Extinguisher 9 Liters</li>\n</ul>",
        "description": "<p><ul>\n<li>Water extinguishers are reliable and effective general purpose extinguishers, providing a cost effective solution for tackling freely burning material, such as paper, cloth, wood and furniture.</li>\n<li>Water Fire Extinguisher 9 Liters</li>\n</ul></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "147.00",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/Water-Fire-Extinguisher.jpg",
        "filterCategory": "water",
        "categoryLabel": "Water Extinguisher"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S0015",
        "name": "Fireguard 9kg Dry Chemical Powder Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>Fireguard FGFP9 9kg Dry Chemical Powder Fire Extinguisher</li>\n<li>ABC or multipurpose fire extinguishers are multi-function extinguishers capable of extinguishing class A and class B fires.</li>\n<li>Dry Chemical Powder Fire Extinguisher 9Kg – FGFP9</li>\n</ul>\n<p>&nbsp;</p>\n<p>&nbsp;</p>",
        "description": "<p><ul>\n<li>Fireguard FGFP9 9kg Dry Chemical Powder Fire Extinguisher</li>\n<li>ABC or multipurpose fire extinguishers are multi-function extinguishers capable of extinguishing class A and class B fires.</li>\n<li>Dry Chemical Powder Fire Extinguisher 9Kg – FGFP9</li>\n</ul>\n<p>&nbsp;</p>\n<p>&nbsp;</p></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "157.50",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/Fireguard-FGFP9-9kg.jpg",
        "filterCategory": "powder",
        "categoryLabel": "Dry Powder (DCP)"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S05072408",
        "name": "Fireking 12KG Dry Powder Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>ABC dry powder is multi-purpose  for all class A,B,C and electrical fire risks. Ideal for residential, commercial and industrial applications.</li>\n</ul>",
        "description": "<p><ul>\n<li>ABC dry powder is multi-purpose  for all class A,B,C and electrical fire risks. Ideal for residential, commercial and industrial applications.</li>\n</ul></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "189.00",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/05/Fireking-Fire-Extinguisher.jpg",
        "filterCategory": "powder",
        "categoryLabel": "Dry Powder (DCP)"
    },
    {
        "id": "",
        "type": "simple",
        "sku": "S10122301",
        "name": "Fireking 1KG Dry Powder Fire Extinguisher",
        "published": 1,
        "is_featured": 0,
        "visibility_in_catalog": "visible",
        "short_description": "<ul>\n<li>Fireking FKPD1 1KG Dry Powder Fire Extinguisher</li>\n<li>ABC dry powder is multi-purpose  for all class A,B,C and electrical fire risks. Ideal for residential, commercial and industrial applications.</li>\n</ul>",
        "description": "<p><ul>\n<li>Fireking FKPD1 1KG Dry Powder Fire Extinguisher</li>\n<li>ABC dry powder is multi-purpose  for all class A,B,C and electrical fire risks. Ideal for residential, commercial and industrial applications.</li>\n</ul></p>",
        "tax_status": "taxable",
        "in_stock": 1,
        "stock": "",
        "regular_price": "52.50",
        "categories": "Fire Fighting > Fire Extinguisher, Fire Products",
        "images": "https://safetag.ae/wp-content/uploads/2024/03/1kg-DCP.jpg",
        "filterCategory": "powder",
        "categoryLabel": "Dry Powder (DCP)"
    }
];

    // Ensure category exists
    $parent_cat = wp_insert_term('Fire Fighting', 'product_cat', array('slug' => 'fire-fighting'));
    $parent_id = is_wp_error($parent_cat) ? ($parent_cat->get_error_data('term_exists') ?? 0) : $parent_cat['term_id'];

    $sub_cat = wp_insert_term('Fire Extinguisher', 'product_cat', array(
        'slug' => 'fire-extinguisher',
        'parent' => $parent_id
    ));
    $sub_id = is_wp_error($sub_cat) ? ($sub_cat->get_error_data('term_exists') ?? 0) : $sub_cat['term_id'];

    require_once(ABSPATH . 'wp-admin/includes/media.php');
    require_once(ABSPATH . 'wp-admin/includes/file.php');
    require_once(ABSPATH . 'wp-admin/includes/image.php');

    $imported = 0;
    foreach ($products as $p) {
        // Check if product with this SKU already exists
        $existing_id = wc_get_product_id_by_sku($p['sku']);
        if ($existing_id) {
            continue;
        }

        $post_id = wp_insert_post(array(
            'post_title'   => $p['name'],
            'post_content' => $p['description'],
            'post_excerpt' => $p['short_description'],
            'post_status'  => 'publish',
            'post_type'    => 'product'
        ));

        if ($post_id && !is_wp_error($post_id)) {
            wp_set_object_terms($post_id, array((int)$sub_id, (int)$parent_id), 'product_cat');

            update_post_meta($post_id, '_visibility', 'visible');
            update_post_meta($post_id, '_stock_status', 'instock');
            update_post_meta($post_id, '_regular_price', $p['regular_price']);
            update_post_meta($post_id, '_price', $p['regular_price']);
            update_post_meta($post_id, '_sku', $p['sku']);

            // Sideload image
            $img_url = explode(',', $p['images'])[0];
            if (!empty($img_url)) {
                $att_id = media_sideload_image($img_url, $post_id, $p['name'], 'id');
                if (!is_wp_error($att_id)) {
                    set_post_thumbnail($post_id, $att_id);
                }
            }
            $imported++;
        }
    }

    echo '<div class="notice notice-success is-dismissible"><p>Successfully imported ' . $imported . ' Fire Extinguisher products into WooCommerce!</p></div>';
}
