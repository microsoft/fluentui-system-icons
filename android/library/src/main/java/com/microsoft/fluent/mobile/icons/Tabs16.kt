package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tabs16: ImageVector
  get() {
    if (_tabs16 != null) {
      return _tabs16!!
    }
    _tabs16 = fluentIcon(name = "Filled.Tabs16", 16f) {
      materialPath {
          moveTo(6.5F, 2.0F)
          curveTo(4.015F, 2.0F, 2.0F, 4.015F, 2.0F, 6.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(-0.607F, -0.456F, -1.0F, -1.182F, -1.0F, -2.0F)
          verticalLineToRelative(-3.0F)
          curveTo(1.0F, 3.462F, 3.462F, 1.0F, 6.5F, 1.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.818F, 0.0F, 1.544F, 0.393F, 2.0F, 1.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(4.06F, 6.395F)
          curveTo(4.34F, 5.028F, 5.55F, 4.0F, 7.0F, 4.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(-0.456F, -0.607F, -1.182F, -1.0F, -2.0F, -1.0F)
          horizontalLineTo(7.0F)
          curveTo(4.79F, 3.0F, 3.0F, 4.79F, 3.0F, 7.0F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.818F, 0.393F, 1.544F, 1.0F, 2.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -0.207F, 0.021F, -0.41F, 0.06F, -0.605F)
          close()
          moveTo(7.5F, 5.0F)
          curveTo(6.12F, 5.0F, 5.0F, 6.12F, 5.0F, 7.5F)
          verticalLineToRelative(5.0F)
          curveTo(5.0F, 13.88F, 6.12F, 15.0F, 7.5F, 15.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-5.0F)
          curveTo(15.0F, 6.12F, 13.88F, 5.0F, 12.5F, 5.0F)
          horizontalLineToRelative(-5.0F)
          close()        
      }
    }
    return _tabs16!!
  }

private var _tabs16: ImageVector? = null
