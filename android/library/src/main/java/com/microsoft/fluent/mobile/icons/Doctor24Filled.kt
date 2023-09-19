package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Doctor24: ImageVector
  get() {
    if (_doctor24 != null) {
      return _doctor24!!
    }
    _doctor24 = fluentIcon(name = "Filled.Doctor24", 24f) {
      materialPath {
          moveTo(10.0F, 3.25F)
          curveTo(9.034F, 3.25F, 8.25F, 4.034F, 8.25F, 5.0F)
          verticalLineToRelative(3.25F)
          horizontalLineTo(5.0F)
          curveToRelative(-0.966F, 0.0F, -1.75F, 0.784F, -1.75F, 1.75F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(3.25F)
          verticalLineTo(19.0F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-3.25F)
          horizontalLineTo(19.0F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineToRelative(-3.25F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineToRelative(-4.0F)
          close()        
      }
    }
    return _doctor24!!
  }

private var _doctor24: ImageVector? = null
