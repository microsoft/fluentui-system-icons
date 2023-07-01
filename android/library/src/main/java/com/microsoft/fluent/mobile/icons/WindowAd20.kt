package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WindowAd20: ImageVector
  get() {
    if (_windowAd20 != null) {
      return _windowAd20!!
    }
    _windowAd20 = fluentIcon(name = "Filled.WindowAd20", 20f) {
      materialPath {
          moveTo(6.5F, 8.0F)
          curveTo(6.224F, 8.0F, 6.0F, 8.224F, 6.0F, 8.5F)
          verticalLineToRelative(4.0F)
          curveTo(6.0F, 12.776F, 6.224F, 13.0F, 6.5F, 13.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-4.0F)
          curveTo(11.0F, 8.224F, 10.776F, 8.0F, 10.5F, 8.0F)
          horizontalLineToRelative(-4.0F)
          close()
          moveTo(10.0F, 9.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(7.0F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(3.0F)
          close()
          moveTo(3.0F, 5.5F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveTo(15.88F, 3.0F, 17.0F, 4.12F, 17.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.12F, 17.0F, 3.0F, 15.88F, 3.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveTo(4.5F, 7.0F)
          verticalLineToRelative(7.25F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(-11.0F)
          close()        
      }
    }
    return _windowAd20!!
  }

private var _windowAd20: ImageVector? = null
