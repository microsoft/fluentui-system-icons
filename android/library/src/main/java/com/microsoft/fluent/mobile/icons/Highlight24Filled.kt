package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Highlight24: ImageVector
  get() {
    if (_highlight24 != null) {
      return _highlight24!!
    }
    _highlight24 = fluentIcon(name = "Filled.Highlight24", 24f) {
      materialPath {
          moveTo(5.25F, 2.0F)
          curveTo(4.007F, 2.0F, 3.0F, 3.007F, 3.0F, 4.25F)
          verticalLineToRelative(3.0F)
          curveTo(3.0F, 8.493F, 4.007F, 9.5F, 5.25F, 9.5F)
          horizontalLineToRelative(13.5F)
          curveTo(19.993F, 9.5F, 21.0F, 8.493F, 21.0F, 7.25F)
          verticalLineToRelative(-3.0F)
          curveTo(21.0F, 3.007F, 19.993F, 2.0F, 18.75F, 2.0F)
          horizontalLineTo(5.25F)
          close()
          moveTo(5.0F, 11.75F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(14.0F)
          verticalLineToRelative(0.75F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineToRelative(-9.5F)
          curveTo(6.007F, 14.0F, 5.0F, 12.993F, 5.0F, 11.75F)
          close()
          moveToRelative(2.503F, 3.75F)
          horizontalLineTo(16.5F)
          verticalLineToRelative(1.288F)
          curveToRelative(0.0F, 0.815F, -0.44F, 1.561F, -1.141F, 1.958F)
          lineToRelative(-0.154F, 0.08F)
          lineToRelative(-6.635F, 3.106F)
          curveToRelative(-0.466F, 0.218F, -0.997F, -0.087F, -1.061F, -0.578F)
          lineToRelative(-0.007F, -0.101F)
          verticalLineTo(15.5F)
          close()        
      }
    }
    return _highlight24!!
  }

private var _highlight24: ImageVector? = null
