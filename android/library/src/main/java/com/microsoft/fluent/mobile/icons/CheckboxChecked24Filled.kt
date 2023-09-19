package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CheckboxChecked24: ImageVector
  get() {
    if (_checkboxChecked24 != null) {
      return _checkboxChecked24!!
    }
    _checkboxChecked24 = fluentIcon(name = "Filled.CheckboxChecked24", 24f) {
      materialPath {
          moveTo(6.25F, 3.0F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineTo(6.25F)
          close()
          moveToRelative(11.03F, 6.28F)
          lineToRelative(-6.754F, 6.747F)
          curveToRelative(-0.293F, 0.292F, -0.767F, 0.292F, -1.06F, 0.0F)
          lineTo(6.72F, 13.28F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.768F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.768F, -0.293F, 1.06F, 0.0F)
          lineToRelative(2.217F, 2.216F)
          lineToRelative(6.223F, -6.217F)
          curveToRelative(0.293F, -0.292F, 0.768F, -0.292F, 1.06F, 0.001F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.768F, 0.0F, 1.06F)
          close()        
      }
    }
    return _checkboxChecked24!!
  }

private var _checkboxChecked24: ImageVector? = null
