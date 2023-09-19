package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CheckboxUnchecked12: ImageVector
  get() {
    if (_checkboxUnchecked12 != null) {
      return _checkboxUnchecked12!!
    }
    _checkboxUnchecked12 = fluentIcon(name = "Filled.CheckboxUnchecked12", 12f) {
      materialPath {
          moveTo(2.0F, 4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(2.0F, -0.5F)
          curveTo(3.724F, 3.5F, 3.5F, 3.724F, 3.5F, 4.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(4.0F)
          close()        
      }
    }
    return _checkboxUnchecked12!!
  }

private var _checkboxUnchecked12: ImageVector? = null
