import os
import shutil
import zipfile

set = {
"ic_fluent_slide_add_24_regular.imageset",
"ic_fluent_slide_hide_24_regular.imageset",
"ic_fluent_slide_layout_24_regular.imageset",
"ic_fluent_slide_design_24_regular.imageset",
"ic_fluent_document_endnote_24_regular.imageset",
"ic_fluent_design_ideas_24_regular.imageset",
"ic_fluent_color_background_24_regular.imageset",
"ic_fluent_shapes_24_regular.imageset",
"ic_fluent_apps_add_in_24_regular.imageset",
"ic_fluent_camera_24_regular.imageset",
"ic_fluent_image_24_regular.imageset",
"ic_fluent_image_alt_text_24_regular.imageset",
"ic_fluent_resize_mage_24_regular.imageset",
"ic_fluent_backward_24_regular.imageset",
"ic_fluent_forward_24_regular.imageset",
"ic_fluent_bring_to_front_24_regular.imageset",
"ic_fluent_send_to_back_24_regular.imageset",
"ic_fluent_icons_24_regular.imageset",
"ic_fluent_group_24_regular.imageset",
"ic_fluent_select_object_24_regular.imageset",
"ic_fluent_lasso_24_regular.imageset",
"ic_fluent_arrow_clockwise_24_regular.imageset",
"ic_fluent_color_24_regular.imageset",
"ic_fluent_video_clip_24_regular.imageset",
"ic_fluent_presenter_24_regular.imageset",
"ic_fluent_play_24_regular.imageset",
"ic_fluent_text_bold_24_regular.imageset",
"ic_fluent_text_italic_24_regular.imageset",
"ic_fluent_text_underline_24_regular.imageset",
"ic_fluent_text_strikethrough_24_regular.imageset",
"ic_fluent_text_bullet_list_24_regular.imageset",
"ic_fluent_text_number_list_ltr_24_regular.imageset",
"ic_fluent_text_paragraph_settings_24_regular.imageset",
"ic_fluent_text_number_format_24_regular.imageset",
"ic_fluent_text_footnote_24_regular.imageset",
"ic_fluent_text_change_case_24_regular.imageset",
"ic_fluent_text_subscript_24_regular.imageset",
"ic_fluent_text_superscript_24_regular.imageset",
"ic_fluent_text_direction_24_regular.imageset",
"ic_fluent_text_expand_24_regular.imageset",
"ic_fluent_text_collapse_24_regular.imageset",
"ic_fluent_book_formula_text_24_regular.imageset",
"ic_fluent_book_formula_logical_24_regular.imageset",
"ic_fluent_book_formula_information_24_regular.imageset",
"ic_fluent_book_formula_database_24_regular.imageset",
"ic_fluent_book_formula_engineering_24_regular.imageset",
"ic_fluent_book_formula_financial_24_regular.imageset",
"ic_fluent_book_formula_recent_24_regular.imageset",
"ic_fluent_book_formula_statistics_24_regular.imageset",
"ic_fluent_book_formula_lookup_24_regular.imageset",
"ic_fluent_book_formula_math_24_regular.imageset",
"ic_fluent_book_formula_date_24_regular.imageset",
"ic_fluent_data_bar_vertical_24_regular.imageset",
"ic_fluent_data_line_24_regular.imageset",
"ic_fluent_data_pie_24_regular.imageset",
"ic_fluent_data_bar_horizontal_24_regular.imageset",
"ic_fluent_data_area_24_regular.imageset",
"ic_fluent_data_scatter_24_regular.imageset",
"ic_fluent_map_24_regular.imageset",
"ic_fluent_data_treemap_24_regular.imageset",
"ic_fluent_data_sunburst_24_regular.imageset",
"ic_fluent_data_histogram_24_regular.imageset",
"ic_fluent_data_whisker_24_regular.imageset",
"ic_fluent_data_waterfall_24_regular.imageset",
"ic_fluent_data_funnel_24_regular.imageset",
"ic_fluent_more_24_regular.imageset",
"ic_fluent_text_edit_style_24_regular.imageset",
"ic_fluent_color_fill_24_regular.imageset",
"ic_fluent_color_line_24_regular.imageset",
"ic_fluent_text_effects_24_regular.imageset",
"ic_fluent_text_color_24_regular.imageset",
"ic_fluent_read_aloud_24_regular.imageset",
"ic_fluent_erase_24_regular.imageset",
"ic_fluent_text_clear_formatting_24_regular.imageset",
"ic_fluent_clear_formatting_24_regular.imageset",
"ic_fluent_document_24_regular.imageset",
"ic_fluent_document_landscape_24_regular.imageset",
"ic_fluent_document_header_footer_24_regular.imageset",
"ic_fluent_document_footer_24_regular.imageset",
"ic_fluent_document_header_remove_24_regular.imageset",
"ic_fluent_document_footer_remove_24_regular.imageset",
"ic_fluent_document_page_bottom_left_24_regular.imageset",
"ic_fluent_document_page_top_left_24_regular.imageset",
"ic_fluent_document_page_bottom_center_24_regular.imageset",
"ic_fluent_document_page_top_center_24_regular.imageset",
"ic_fluent_document_one_page_24_regular.imageset",
"ic_fluent_text_change_accept_24_regular.imageset",
"ic_fluent_text_change_reject_24_regular.imageset",
"ic_fluent_text_change_next_24_regular.imageset",
"ic_fluent_text_change_previous_24_regular.imageset",
"ic_fluent_text_change_settings_24_regular.imageset",
"ic_fluent_document_none_24_regular.imageset",
"ic_fluent_document_margins_24_regular.imageset",
"ic_fluent_document_width_24_regular.imageset",
"ic_fluent_document_page_break_24_regular.imageset",
"ic_fluent_text_column_two_left_24_regular.imageset",
"ic_fluent_text_column_two_24_regular.imageset",
"ic_fluent_text_column_two_right_24_regular.imageset",
"ic_fluent_text_column_one_24_regular.imageset",
"ic_fluent_text_column_three_24_regular.imageset",
"ic_fluent_textbox_align_24_regular.imageset",
"ic_fluent_textbox_align_bottom_24_regular.imageset",
"ic_fluent_textbox_align_middle_24_regular.imageset",
"ic_fluent_textbox_align_top_24_regular.imageset",
"ic_fluent_text_align_left_24_regular.imageset",
"ic_fluent_text_align_right_24_regular.imageset",
"ic_fluent_text_align_center_24_regular.imageset",
"ic_fluent_text_indent_decrease_24_regular.imageset",
"ic_fluent_text_indent_increase_24_regular.imageset",
"ic_fluent_text_first_line_24_regular.imageset",
"ic_fluent_text_hanging_24_regular.imageset",
"ic_fluent_text_align_distributed_24_regular.imageset",
"ic_fluent_text_line_spacing_24_regular.imageset",
"ic_fluent_text_add_space_after_24_regular.imageset",
"ic_fluent_text_add_space_before_24_regular.imageset",
"ic_fluent_text_direction_horizontal_ltr_24_regular.imageset",
"ic_fluent_text_direction_vertical_24_regular.imageset",
"ic_fluent_text_word_count_24_regular.imageset",
"ic_fluent_table_delete_24_regular.imageset",
"ic_fluent_table_cells_merge_24_regular.imageset",
"ic_fluent_table_cells_split_24_regular.imageset",
"ic_fluent_table_settings_24_regular.imageset",
"ic_fluent_table_24_regular.imageset",
"ic_fluent_color_line_24_regular.imageset",
"ic_fluent_zoom_in_24_regular.imageset",
"ic_fluent_zoom_out_24_regular.imageset",
"ic_fluent_search_info_24_regular.imageset",
"ic_fluent_phone_mobile_24_regular.imageset",
"ic_fluent_mobile_optimized_24_regular.imageset",
"ic_fluent_comment_add_24_regular.imageset",
"ic_fluent_comment_next_24_regular.imageset",
"ic_fluent_comment_previous_24_regular.imageset",
"ic_fluent_comment_resolve_24_regular.imageset",
"ic_fluent_comment_delete_24_regular.imageset",
"ic_fluent_comment_24_regular.imageset",
"ic_fluent_link_24_regular.imageset",
"ic_fluent_proofread_language_24_regular.imageset",
"ic_fluent_autosum_24_regular.imageset",
"ic_fluent_ruler_24_regular.imageset",
"ic_fluent_star_24_regular.imageset",
"ic_fluent_highlight_24_regular.imageset",
"ic_fluent_arrow_rotate_icon_24_regular.imageset",
"ic_fluent_person_block_24_regular.imageset"
}

# Create .zip file from a list of directories
def zipdir(dir_path, ziph):
    # ziph is zipfile handle
    for root, dirs, files in os.walk(dir_path):
        for file in files:
            ziph.write(os.path.join(root, file),
                       os.path.relpath(os.path.join(root, file),
                                       os.path.join(dir_path, '../../')))

def zipit(dir_list, zip_name):
    zipf = zipfile.ZipFile(zip_name, 'w', zipfile.ZIP_DEFLATED)
    for dir in dir_list:
        zipdir(dir, zipf)
    zipf.close()

# Create directory if missing
def create_directory_if_necessary(x_path):
    if not os.path.exists(x_path):
        os.makedirs(x_path)

full_assets_catalog_dir = 'ios/FluentIcons/Assets/IconAssets.xcassets/'

nuget_path = 'DerivedData/Build/Products/nuget'
create_directory_if_necessary(nuget_path)

debug_iphoneos = 'DerivedData/Build/Products/nuget/Debug-iphoneos/FluentAssets.xcassets'
create_directory_if_necessary(debug_iphoneos)

ship_iphoneos = 'DerivedData/Build/Products/nuget/Ship-iphoneos/FluentAssets.xcassets'
create_directory_if_necessary(ship_iphoneos)

debug_iphonesimulator = 'DerivedData/Build/Products/nuget/Debug-iphonesimulator/FluentAssets.xcassets'
create_directory_if_necessary(debug_iphonesimulator)

ship_iphonesimulator = 'DerivedData/Build/Products/nuget/Ship-iphonesimulator/FluentAssets.xcassets'
create_directory_if_necessary(ship_iphonesimulator)

for path in os.listdir(full_assets_catalog_dir):
    if path in set:
        src_folder = os.path.join(full_assets_catalog_dir, path)
        if os.path.isdir(src_folder):
            shutil.copytree(src_folder, os.path.join(debug_iphoneos, path))
            shutil.copytree(src_folder, os.path.join(ship_iphoneos, path))
            shutil.copytree(src_folder, os.path.join(debug_iphonesimulator, path))
            shutil.copytree(src_folder, os.path.join(ship_iphonesimulator, path))

zipit([debug_iphoneos, ship_iphoneos, debug_iphonesimulator, ship_iphonesimulator], os.path.join(nuget_path, 'BuildOutput.zip'))
