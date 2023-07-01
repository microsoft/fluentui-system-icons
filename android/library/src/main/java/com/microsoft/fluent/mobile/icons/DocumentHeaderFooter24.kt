package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentHeaderFooter24: ImageVector
  get() {
    if (_documentHeaderFooter24 != null) {
      return _documentHeaderFooter24!!
    }
    _documentHeaderFooter24 = fluentIcon(name = "Filled.DocumentHeaderFooter24", 24f) {
      materialPath {
          moveTo(17.75F, 2.0F)
          curveToRelative(1.19F, 0.0F, 2.166F, 0.925F, 2.245F, 2.096F)
          lineTo(20.0F, 4.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 1.19F, -0.925F, 2.166F, -2.096F, 2.245F)
          lineTo(17.75F, 22.0F)
          horizontalLineTo(6.25F)
          curveToRelative(-1.19F, 0.0F, -2.166F, -0.925F, -2.245F, -2.096F)
          lineTo(4.0F, 19.75F)
          verticalLineTo(4.25F)
          curveToRelative(0.0F, -1.19F, 0.925F, -2.166F, 2.096F, -2.245F)
          lineTo(6.25F, 2.0F)
          horizontalLineToRelative(11.5F)
          close()
          moveTo(7.005F, 6.505F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.829F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          curveToRelative(0.0F, -0.829F, -0.671F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-7.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.671F, -1.5F, 1.5F)
          close()
          moveToRelative(0.0F, 11.0F)
          curveToRelative(0.0F, 0.83F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.829F, 0.0F, 1.5F, -0.67F, 1.5F, -1.5F)
          curveToRelative(0.0F, -0.828F, -0.671F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-7.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          close()        
      }
    }
    return _documentHeaderFooter24!!
  }

private var _documentHeaderFooter24: ImageVector? = null
