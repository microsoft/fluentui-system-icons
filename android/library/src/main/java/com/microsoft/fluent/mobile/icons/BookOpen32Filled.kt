package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookOpen32: ImageVector
  get() {
    if (_bookOpen32 != null) {
      return _bookOpen32!!
    }
    _bookOpen32 = fluentIcon(name = "Filled.BookOpen32", 32f) {
      materialPath {
          moveTo(4.25F, 4.0F)
          curveTo(3.007F, 4.0F, 2.0F, 5.007F, 2.0F, 6.25F)
          verticalLineToRelative(19.5F)
          curveTo(2.0F, 26.993F, 3.007F, 28.0F, 4.25F, 28.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.524F, 0.0F, 2.88F, -0.718F, 3.75F, -1.834F)
          curveTo(16.87F, 27.282F, 18.226F, 28.0F, 19.75F, 28.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(6.25F)
          curveTo(30.0F, 5.007F, 28.993F, 4.0F, 27.75F, 4.0F)
          horizontalLineToRelative(-8.0F)
          curveTo(18.226F, 4.0F, 16.87F, 4.718F, 16.0F, 5.834F)
          curveTo(15.13F, 4.718F, 13.774F, 4.0F, 12.25F, 4.0F)
          horizontalLineToRelative(-8.0F)
          close()
          moveTo(4.5F, 25.5F)
          verticalLineToRelative(-19.0F)
          horizontalLineToRelative(7.75F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineToRelative(14.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(4.5F)
          close()
          moveToRelative(13.0F, -16.75F)
          curveToRelative(0.0F, -1.243F, 1.007F, -2.25F, 2.25F, -2.25F)
          horizontalLineToRelative(7.75F)
          verticalLineToRelative(19.0F)
          horizontalLineToRelative(-7.75F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          verticalLineTo(8.75F)
          close()        
      }
    }
    return _bookOpen32!!
  }

private var _bookOpen32: ImageVector? = null
