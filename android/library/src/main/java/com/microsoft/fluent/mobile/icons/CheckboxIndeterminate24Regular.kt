package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CheckboxIndeterminate24: ImageVector
  get() {
    if (_checkboxIndeterminate24 != null) {
      return _checkboxIndeterminate24!!
    }
    _checkboxIndeterminate24 = fluentIcon(name = "Regular.CheckboxIndeterminate24", 24f) {
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
          moveTo(4.5F, 6.25F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(6.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineTo(6.25F)
          close()
          moveTo(7.25F, 6.0F)
          curveTo(6.56F, 6.0F, 6.0F, 6.56F, 6.0F, 7.25F)
          verticalLineToRelative(9.5F)
          curveTo(6.0F, 17.44F, 6.56F, 18.0F, 7.25F, 18.0F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineToRelative(-9.5F)
          curveTo(18.0F, 6.56F, 17.44F, 6.0F, 16.75F, 6.0F)
          horizontalLineToRelative(-9.5F)
          close()        
      }
    }
    return _checkboxIndeterminate24!!
  }

private var _checkboxIndeterminate24: ImageVector? = null
