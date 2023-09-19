package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SlideMultiple24: ImageVector
  get() {
    if (_slideMultiple24 != null) {
      return _slideMultiple24!!
    }
    _slideMultiple24 = fluentIcon(name = "Filled.SlideMultiple24", 24f) {
      materialPath {
          moveTo(2.0F, 7.75F)
          curveTo(2.0F, 5.127F, 4.127F, 3.0F, 6.75F, 3.0F)
          horizontalLineToRelative(10.0F)
          curveTo(17.993F, 3.0F, 19.0F, 4.007F, 19.0F, 5.25F)
          verticalLineTo(5.5F)
          horizontalLineTo(7.75F)
          curveTo(5.955F, 5.5F, 4.5F, 6.955F, 4.5F, 8.75F)
          verticalLineTo(17.0F)
          horizontalLineTo(4.25F)
          curveTo(3.007F, 17.0F, 2.0F, 15.993F, 2.0F, 14.75F)
          verticalLineToRelative(-7.0F)
          close()
          moveTo(7.75F, 6.5F)
          curveTo(6.507F, 6.5F, 5.5F, 7.507F, 5.5F, 8.75F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineToRelative(-9.5F)
          curveToRelative(0.0F, -1.243F, -1.007F, -2.25F, -2.25F, -2.25F)
          horizontalLineToRelative(-12.0F)
          close()        
      }
    }
    return _slideMultiple24!!
  }

private var _slideMultiple24: ImageVector? = null
