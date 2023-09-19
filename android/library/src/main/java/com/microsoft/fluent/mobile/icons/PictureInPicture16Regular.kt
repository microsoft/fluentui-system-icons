package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PictureInPicture16: ImageVector
  get() {
    if (_pictureInPicture16 != null) {
      return _pictureInPicture16!!
    }
    _pictureInPicture16 = fluentIcon(name = "Regular.PictureInPicture16", 16f) {
      materialPath {
          moveTo(1.0F, 4.5F)
          curveTo(1.0F, 3.12F, 2.12F, 2.0F, 3.5F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveTo(12.88F, 2.0F, 14.0F, 3.12F, 14.0F, 4.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineTo(4.5F)
          curveTo(13.0F, 3.672F, 12.328F, 3.0F, 11.5F, 3.0F)
          horizontalLineToRelative(-8.0F)
          curveTo(2.672F, 3.0F, 2.0F, 3.672F, 2.0F, 4.5F)
          verticalLineToRelative(5.0F)
          curveTo(2.0F, 10.328F, 2.672F, 11.0F, 3.5F, 11.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(3.5F)
          curveTo(2.12F, 12.0F, 1.0F, 10.88F, 1.0F, 9.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveTo(9.0F, 9.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(9.0F)
          close()        
      }
    }
    return _pictureInPicture16!!
  }

private var _pictureInPicture16: ImageVector? = null
