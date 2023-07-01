package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PictureInPicture24: ImageVector
  get() {
    if (_pictureInPicture24 != null) {
      return _pictureInPicture24!!
    }
    _pictureInPicture24 = fluentIcon(name = "Regular.PictureInPicture24", 24f) {
      materialPath {
          moveTo(2.0F, 6.25F)
          curveTo(2.0F, 4.455F, 3.455F, 3.0F, 5.25F, 3.0F)
          horizontalLineToRelative(13.5F)
          curveTo(20.545F, 3.0F, 22.0F, 4.455F, 22.0F, 6.25F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(-1.5F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineTo(5.25F)
          curveTo(4.284F, 4.5F, 3.5F, 5.284F, 3.5F, 6.25F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineTo(11.0F)
          verticalLineTo(19.0F)
          horizontalLineTo(5.25F)
          curveTo(3.455F, 19.0F, 2.0F, 17.545F, 2.0F, 15.75F)
          verticalLineToRelative(-9.5F)
          close()
          moveTo(14.0F, 13.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _pictureInPicture24!!
  }

private var _pictureInPicture24: ImageVector? = null
