package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PictureInPicture20: ImageVector
  get() {
    if (_pictureInPicture20 != null) {
      return _pictureInPicture20!!
    }
    _pictureInPicture20 = fluentIcon(name = "Filled.PictureInPicture20", 20f) {
      materialPath {
          moveTo(4.75F, 3.0F)
          curveTo(3.231F, 3.0F, 2.0F, 4.231F, 2.0F, 5.75F)
          verticalLineToRelative(6.5F)
          curveTo(2.0F, 13.769F, 3.231F, 15.0F, 4.75F, 15.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(-2.5F)
          curveToRelative(0.0F, -1.38F, 1.12F, -2.5F, 2.5F, -2.5F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.171F, 0.0F, 0.338F, 0.017F, 0.5F, 0.05F)
          verticalLineToRelative(-4.3F)
          curveTo(18.0F, 4.231F, 16.769F, 3.0F, 15.25F, 3.0F)
          horizontalLineTo(4.75F)
          close()
          moveTo(18.0F, 11.085F)
          curveTo(17.844F, 11.03F, 17.675F, 11.0F, 17.5F, 11.0F)
          horizontalLineToRelative(-6.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -0.653F, -0.417F, -1.209F, -1.0F, -1.415F)
          close()        
      }
    }
    return _pictureInPicture20!!
  }

private var _pictureInPicture20: ImageVector? = null
