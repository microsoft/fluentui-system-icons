package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PictureInPicture24: ImageVector
  get() {
    if (_pictureInPicture24 != null) {
      return _pictureInPicture24!!
    }
    _pictureInPicture24 = fluentIcon(name = "Filled.PictureInPicture24", 24f) {
      materialPath {
          moveTo(5.25F, 3.0F)
          curveTo(3.455F, 3.0F, 2.0F, 4.455F, 2.0F, 6.25F)
          verticalLineToRelative(9.5F)
          curveTo(2.0F, 17.545F, 3.455F, 19.0F, 5.25F, 19.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.35F, 0.0F, 0.687F, 0.06F, 1.0F, 0.17F)
          verticalLineTo(6.25F)
          curveTo(22.0F, 4.455F, 20.545F, 3.0F, 18.75F, 3.0F)
          horizontalLineTo(5.25F)
          close()
          moveTo(22.0F, 13.268F)
          curveTo(21.706F, 13.098F, 21.364F, 13.0F, 21.0F, 13.0F)
          horizontalLineToRelative(-7.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-5.0F)
          curveToRelative(0.0F, -0.74F, -0.402F, -1.387F, -1.0F, -1.732F)
          close()        
      }
    }
    return _pictureInPicture24!!
  }

private var _pictureInPicture24: ImageVector? = null
