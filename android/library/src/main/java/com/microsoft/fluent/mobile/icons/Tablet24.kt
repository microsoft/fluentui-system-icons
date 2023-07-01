package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Tablet24: ImageVector
  get() {
    if (_tablet24 != null) {
      return _tablet24!!
    }
    _tablet24 = fluentIcon(name = "Regular.Tablet24", 24f) {
      materialPath {
          moveTo(19.749F, 4.0F)
          curveToRelative(1.242F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineToRelative(11.502F)
          curveToRelative(0.0F, 1.243F, -1.008F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(4.25F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          verticalLineTo(6.25F)
          curveTo(2.0F, 5.007F, 3.007F, 4.0F, 4.25F, 4.0F)
          horizontalLineToRelative(15.499F)
          close()
          moveToRelative(0.0F, 1.5F)
          horizontalLineTo(4.25F)
          curveTo(3.836F, 5.5F, 3.5F, 5.836F, 3.5F, 6.25F)
          verticalLineToRelative(11.502F)
          curveToRelative(0.0F, 0.415F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(15.499F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.335F, 0.75F, -0.75F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          close()
          moveToRelative(-9.499F, 10.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.744F)
          lineTo(13.75F, 17.0F)
          horizontalLineToRelative(-3.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.335F, -0.75F, -0.75F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.693F, 0.648F, -0.743F)
          lineTo(10.25F, 15.5F)
          horizontalLineToRelative(3.5F)
          close()        
      }
    }
    return _tablet24!!
  }

private var _tablet24: ImageVector? = null
