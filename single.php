<?php get_header(); ?>
			<section id="content">
				<?php
					if ( have_posts() ) :
						/* Start the Loop */
						while ( have_posts() ) : the_post();
				?>
							<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
								<header class="entry-header">
									<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
									<h2 class="entry-meta"><?php web2f16_wptheme_posted_on(); ?></h2>
								</header>
								<div class="entry-content">
									<?php the_content(); ?>
								</div>
								<footer class="entry-footer">
									<h2><?php web2f16_wptheme_entry_footer(); ?></h2>
								</footer>
							</article>
				<?php
						endwhile;
					else :
				?>
							<article>
								<header class="entry-header">
									<h1><?php esc_html_e( 'We couldn\'t find what you were looking for.', 'web2f16_theme' ); ?></h1>
								</header>
							</article>
				<?php
					endif;
				?>
			</section>
<?php get_footer(); ?>
