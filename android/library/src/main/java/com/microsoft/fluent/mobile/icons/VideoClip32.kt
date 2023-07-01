package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.VideoClip32: ImageVector
  get() {
    if (_videoClip32 != null) {
      return _videoClip32!!
    }
    _videoClip32 = fluentIcon(name = "Regular.VideoClip32", 32f) {
      materialPath {
          moveTo(6.5F, 4.0F)
          curveTo(4.015F, 4.0F, 2.0F, 6.015F, 2.0F, 8.5F)
          verticalLineToRelative(15.0F)
          curveTo(2.0F, 25.985F, 4.015F, 28.0F, 6.5F, 28.0F)
          horizontalLineToRelative(19.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineToRelative(-15.0F)
          curveTo(30.0F, 6.015F, 27.985F, 4.0F, 25.5F, 4.0F)
          horizontalLineToRelative(-19.0F)
          close()
          moveTo(4.0F, 8.5F)
          curveTo(4.0F, 7.12F, 5.12F, 6.0F, 6.5F, 6.0F)
          horizontalLineToRelative(19.0F)
          curveTo(26.88F, 6.0F, 28.0F, 7.12F, 28.0F, 8.5F)
          verticalLineToRelative(15.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-19.0F)
          curveTo(5.12F, 26.0F, 4.0F, 24.88F, 4.0F, 23.5F)
          verticalLineToRelative(-15.0F)
          close()
          moveToRelative(8.0F, 3.501F)
          verticalLineTo(20.0F)
          curveToRelative(0.0F, 0.755F, 0.805F, 1.237F, 1.47F, 0.882F)
          lineToRelative(7.498F, -3.999F)
          curveToRelative(0.705F, -0.376F, 0.705F, -1.388F, 0.0F, -1.764F)
          lineToRelative(-7.497F, -4.0F)
          curveTo(12.805F, 10.765F, 12.0F, 11.247F, 12.0F, 12.002F)
          close()        
      }
    }
    return _videoClip32!!
  }

private var _videoClip32: ImageVector? = null
