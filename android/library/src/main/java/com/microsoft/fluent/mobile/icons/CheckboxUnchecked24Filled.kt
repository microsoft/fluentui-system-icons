package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CheckboxUnchecked24: ImageVector
  get() {
    if (_checkboxUnchecked24 != null) {
      return _checkboxUnchecked24!!
    }
    _checkboxUnchecked24 = fluentIcon(name = "Filled.CheckboxUnchecked24", 24f) {
      materialPath {
          moveTo(3.0F, 6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          verticalLineTo(6.25F)
          close()
          moveTo(6.25F, 5.0F)
          curveTo(5.56F, 5.0F, 5.0F, 5.56F, 5.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveTo(5.0F, 18.44F, 5.56F, 19.0F, 6.25F, 19.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineTo(6.25F)
          curveTo(19.0F, 5.56F, 18.44F, 5.0F, 17.75F, 5.0F)
          horizontalLineTo(6.25F)
          close()        
      }
    }
    return _checkboxUnchecked24!!
  }

private var _checkboxUnchecked24: ImageVector? = null
