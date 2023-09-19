package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PictureInPicture20: ImageVector
  get() {
    if (_pictureInPicture20 != null) {
      return _pictureInPicture20!!
    }
    _pictureInPicture20 = fluentIcon(name = "Regular.PictureInPicture20", 20f) {
      materialPath {
          moveTo(2.0F, 5.75F)
          curveTo(2.0F, 4.231F, 3.231F, 3.0F, 4.75F, 3.0F)
          horizontalLineToRelative(10.5F)
          curveTo(16.769F, 3.0F, 18.0F, 4.231F, 18.0F, 5.75F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineTo(5.75F)
          curveTo(17.0F, 4.784F, 16.216F, 4.0F, 15.25F, 4.0F)
          horizontalLineTo(4.75F)
          curveTo(3.784F, 4.0F, 3.0F, 4.784F, 3.0F, 5.75F)
          verticalLineToRelative(6.5F)
          curveTo(3.0F, 13.216F, 3.784F, 14.0F, 4.75F, 14.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(4.75F)
          curveTo(3.231F, 15.0F, 2.0F, 13.769F, 2.0F, 12.25F)
          verticalLineToRelative(-6.5F)
          close()
          moveTo(11.5F, 11.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-6.0F)
          close()        
      }
    }
    return _pictureInPicture20!!
  }

private var _pictureInPicture20: ImageVector? = null
