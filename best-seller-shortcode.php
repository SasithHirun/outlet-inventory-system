<?php
/**
 * ==========================================================================
 * PACIFIC POWER & FIRE CONTRACTORS - "BEST SELLER" BACKEND WORDPRESS SHORTCODE
 * - 100% Server-side Dynamic Query from WordPress Database (wp_posts / wc_product)
 * - Queries actual products from WP Admin > Products (ordered by total_sales)
 * - No hardcoded frontend items: Automatically updates when products are added/edited
 * - Usage: Place [best_sellers_showcase] in any Elementor Shortcode / Text Widget
 * - Add this code to your child theme's functions.php or via "Code Snippets" plugin
 * ==========================================================================
 */

function ppf_register_bestseller_shortcode() {
    ob_start();

    // 1. Fetch live products from WordPress WooCommerce Database
    $query_args = array(
        'post_type'      => 'product',
        'posts_per_page' => 12,
        'post_status'    => 'publish',
        'meta_key'       => 'total_sales',
        'orderby'        => 'meta_value_num',
        'order'          => 'DESC',
    );

    $products_query = new WP_Query($query_args);

    // Fallback if no sales data yet: fetch latest published products
    if (!$products_query->have_posts()) {
        $products_query = new WP_Query(array(
            'post_type'      => 'product',
            'posts_per_page' => 12,
            'post_status'    => 'publish',
            'orderby'        => 'date',
            'order'          => 'DESC',
        ));
    }
    ?>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400;1,700&display=swap" rel="stylesheet">

    <style>
      html, body { overflow-x: clip; }

      .bs-section-wrapper,
      .bs-section-wrapper * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
      }

      .bs-section-wrapper {
        position: relative;
        width: 100vw;
        max-width: 100vw;
        margin: 40px calc(50% - 50vw);
        background: #FFFFFF;
        border-top: 1px solid #E5E7EB;
        border-bottom: 1px solid #E5E7EB;
        padding: 36px clamp(16px, 4vw, 64px);
        color: #111827;
      }

      .bs-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 16px;
        margin-bottom: 24px;
        border-bottom: 1px solid #F3F4F6;
      }

      .bs-title-wrap {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .bs-badge-icon {
        width: 32px;
        height: 32px;
        border-radius: 6px;
        background: #FEF2F2;
        color: #DC2626;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
      }

      .bs-title {
        font-size: 24px;
        font-weight: 800;
        color: #111827;
        letter-spacing: -0.01em;
      }

      .bs-arrows {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .bs-nav-prev {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #FF4742;
        border: 1px solid rgba(0, 0, 0, 0.08);
        color: #1E293B;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 12px rgba(255, 71, 66, 0.3);
      }

      .bs-nav-prev:hover {
        background: #E03530;
        transform: scale(1.06);
      }

      .bs-nav-next {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #FFFFFF;
        border: 1.5px solid #E2E8F0;
        color: #1E293B;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .bs-nav-next:hover {
        border-color: #CBD5E1;
        background: #F8FAFC;
        transform: scale(1.06);
      }

      .bs-arrows svg {
        width: 17px;
        height: 17px;
        stroke: #1E293B;
        stroke-width: 2.6;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .bs-carousel-container {
        overflow-x: auto;
        scroll-behavior: smooth;
        padding-bottom: 12px;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      .bs-carousel-container::-webkit-scrollbar { display: none; }

      .bs-grid {
        display: grid;
        grid-template-rows: repeat(2, auto);
        grid-auto-flow: column;
        grid-auto-columns: calc((100% - (4 * 16px)) / 5); /* 5 cards per row on desktop */
        gap: 16px;
      }

      .bs-card {
        aspect-ratio: 1 / 1;
        background: #FFFFFF;
        border: 1px solid #E5E7EB;
        border-radius: 6px;
        padding: 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        overflow: hidden;
        position: relative;
      }

      .bs-card:hover {
        border-color: #D1D5DB;
        transform: translateY(-2px);
        box-shadow: 0 10px 24px -4px rgba(15, 23, 42, 0.08);
      }

      .bs-card-top { flex-shrink: 0; }
      .bs-category {
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.6px;
        color: #9CA3AF;
        margin-bottom: 3px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .bs-product-title {
        font-size: 12px;
        font-weight: 600;
        color: #1F2937;
        line-height: 1.35;
        height: 32px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-decoration: none;
        transition: color 0.15s ease;
      }

      .bs-product-title:hover { color: #DC2626; }

      .bs-img-link {
        flex: 1;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px 0;
        text-decoration: none;
        overflow: hidden;
      }

      .bs-img-link img {
        max-width: 90%;
        max-height: 100%;
        object-fit: contain;
        transition: transform 0.25s ease;
      }

      .bs-card:hover .bs-img-link img { transform: scale(1.08); }

      .bs-bottom-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding-top: 8px;
        border-top: 1px solid #F3F4F6;
        flex-shrink: 0;
      }

      .bs-price {
        font-size: 14px;
        font-weight: 800;
        color: #111827;
        white-space: nowrap;
      }

      .bs-add-btn {
        padding: 7px 12px;
        background: #DC2626 !important;
        color: #FFFFFF !important;
        border: none !important;
        border-radius: 4px !important;
        font-size: 11px !important;
        font-weight: 700 !important;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        text-decoration: none !important;
        white-space: nowrap;
      }

      .bs-add-btn:hover { background: #B91C1C !important; }

      .bs-cart-flow {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .bs-go-cart-btn {
        padding: 6px 10px;
        background: #111827 !important;
        color: #FFFFFF !important;
        border-radius: 4px;
        font-size: 11px !important;
        font-weight: 700 !important;
        text-decoration: none !important;
        white-space: nowrap;
      }

      .bs-check-badge {
        width: 26px;
        height: 26px;
        border-radius: 4px;
        background: #F0FDF4;
        border: 1px solid #BBF7D0;
        color: #16A34A;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 800;
      }

      @media (max-width: 1200px) {
        .bs-grid { grid-auto-columns: calc((100% - (3 * 16px)) / 4); }
      }
      @media (max-width: 900px) {
        .bs-grid { grid-auto-columns: calc((100% - (2 * 14px)) / 3); gap: 14px; }
      }
      @media (max-width: 600px) {
        .bs-grid { grid-auto-columns: calc((100% - 10px) / 2); gap: 10px; }
        .bs-card { padding: 10px; }
        .bs-product-title { font-size: 11px; height: 28px; }
        .bs-price { font-size: 12px; }
        .bs-add-btn { padding: 5px 8px; font-size: 10px !important; }
      }
    </style>

    <div class="bs-section-wrapper">
      <div class="bs-header">
        <div class="bs-title-wrap">
          <div class="bs-badge-icon">★</div>
          <h2 class="bs-title">Best Seller</h2>
        </div>
        <div class="bs-arrows">
          <button class="bs-nav-prev" onclick="bsScrollPHP(-1)" aria-label="Previous Products">
            <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button class="bs-nav-next" onclick="bsScrollPHP(1)" aria-label="Next Products">
            <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div class="bs-carousel-container" id="bs-carousel-container-php">
        <div class="bs-grid">
          <?php
          if ($products_query->have_posts()) :
              while ($products_query->have_posts()) : $products_query->the_post();
                  global $product;
                  if (!is_a($product, 'WC_Product')) {
                      $product = wc_get_product(get_the_ID());
                  }
                  if (!$product) continue;

                  $p_id       = $product->get_id();
                  $p_title    = get_the_title();
                  $p_link     = get_permalink();
                  $image_id   = $product->get_image_id();
                  $image_url  = $image_id ? wp_get_attachment_image_url($image_id, 'medium') : wc_placeholder_img_src();
                  $categories = wc_get_product_category_list($p_id, ', ', '', '');
                  $clean_cats = strip_tags($categories);
                  if (empty($clean_cats)) $clean_cats = 'Fire Products';
                  $price_html = $product->get_price_html();
                  ?>
                  <div class="bs-card">
                    <div class="bs-card-top">
                      <div class="bs-category"><?php echo esc_html($clean_cats); ?></div>
                      <a href="<?php echo esc_url($p_link); ?>" class="bs-product-title" title="<?php echo esc_attr($p_title); ?>">
                        <?php echo esc_html($p_title); ?>
                      </a>
                    </div>
                    
                    <a href="<?php echo esc_url($p_link); ?>" class="bs-img-link" title="<?php echo esc_attr($p_title); ?>">
                      <img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($p_title); ?>" loading="lazy">
                    </a>

                    <div class="bs-bottom-bar">
                      <div class="bs-price"><?php echo wp_kses_post($price_html); ?></div>
                      <div id="bs-action-<?php echo esc_attr($p_id); ?>">
                        <a href="?add-to-cart=<?php echo esc_attr($p_id); ?>" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart bs-add-btn" data-product_id="<?php echo esc_attr($p_id); ?>" onclick="bsAddToCartPHP(<?php echo esc_attr($p_id); ?>, '<?php echo esc_js($p_title); ?>', this, event)">
                          <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                          <span>Add</span>
                        </a>
                      </div>
                    </div>
                  </div>
              <?php
              endwhile;
              wp_reset_postdata();
          endif;
          ?>
        </div>
      </div>
    </div>

    <script>
      function bsScrollPHP(dir) {
        const container = document.getElementById('bs-carousel-container-php');
        if (container) {
          const scrollAmount = container.clientWidth * 0.85;
          container.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' });
        }
      }

      async function bsAddToCartPHP(productId, productName, btn, event) {
        event.preventDefault();
        if (btn.classList.contains('loading')) return;
        btn.classList.add('loading');
        btn.innerHTML = "<span>...</span>";

        let cartUrl = "<?php echo esc_url(wc_get_cart_url()); ?>";
        let ajaxEndpoint = "<?php echo esc_url(WC_AJAX::get_endpoint('add_to_cart')); ?>";

        try {
          const params = new URLSearchParams();
          params.append('product_id', productId);
          params.append('quantity', '1');

          const response = await fetch(ajaxEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'X-Requested-With': 'XMLHttpRequest'
            },
            body: params.toString(),
            credentials: 'include'
          });

          if (response.ok && window.jQuery) {
            window.jQuery(document.body).trigger('wc_fragment_refresh');
            window.jQuery(document.body).trigger('added_to_cart', [null, null, window.jQuery(btn)]);
          }
        } catch(e) {
          console.log(e);
        }

        const actionWrap = document.getElementById('bs-action-' + productId);
        if (actionWrap) {
          actionWrap.innerHTML = `
            <div class="bs-cart-flow">
              <a href="${cartUrl}" class="bs-go-cart-btn"><span>Cart</span> &rarr;</a>
              <div class="bs-check-badge">✓</div>
            </div>
          `;
        }
      }
    </script>
    <?php
    return ob_get_clean();
}
add_shortcode('best_sellers_showcase', 'ppf_register_bestseller_shortcode');
