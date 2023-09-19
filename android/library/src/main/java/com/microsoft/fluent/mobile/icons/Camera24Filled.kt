package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Camera24: ImageVector
  get() {
    if (_camera24 != null) {
      return _camera24!!
    }
    _camera24 = fluentIcon(name = "Filled.Camera24", 24f) {
      materialPath {
          moveTo(13.925F, 2.504F)
          curveToRelative(0.797F, 0.0F, 1.536F, 0.422F, 1.94F, 1.11F)
          lineToRelative(0.814F, 1.387F)
          horizontalLineToRelative(2.071F)
          curveTo(20.545F, 5.0F, 22.0F, 6.456F, 22.0F, 8.25F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(5.25F)
          curveTo(3.455F, 21.0F, 2.0F, 19.546F, 2.0F, 17.75F)
          verticalLineToRelative(-9.5F)
          curveTo(2.0F, 6.456F, 3.455F, 5.0F, 5.25F, 5.0F)
          horizontalLineToRelative(2.08F)
          lineToRelative(0.875F, -1.424F)
          curveToRelative(0.41F, -0.667F, 1.135F, -1.073F, 1.917F, -1.073F)
          horizontalLineToRelative(3.803F)
          close()
          moveTo(12.0F, 8.0F)
          curveToRelative(-2.485F, 0.0F, -4.5F, 2.015F, -4.5F, 4.5F)
          reflectiveCurveTo(9.515F, 17.0F, 12.0F, 17.0F)
          reflectiveCurveToRelative(4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(14.485F, 8.0F, 12.0F, 8.0F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          reflectiveCurveToRelative(1.343F, -3.0F, 3.0F, -3.0F)
          close()        
      }
    }
    return _camera24!!
  }

private var _camera24: ImageVector? = null
