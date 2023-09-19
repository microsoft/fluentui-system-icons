package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Molecule24: ImageVector
  get() {
    if (_molecule24 != null) {
      return _molecule24!!
    }
    _molecule24 = fluentIcon(name = "Filled.Molecule24", 24f) {
      materialPath {
          moveTo(16.0F, 12.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          reflectiveCurveToRelative(-5.0F, 2.239F, -5.0F, 5.0F)
          curveToRelative(0.0F, 0.906F, 0.241F, 1.757F, 0.663F, 2.49F)
          lineToRelative(-2.714F, 1.808F)
          curveTo(8.218F, 10.5F, 7.167F, 10.0F, 6.0F, 10.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, 1.79F, -4.0F, 4.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          curveToRelative(1.296F, 0.0F, 2.448F, -0.616F, 3.18F, -1.572F)
          lineToRelative(3.886F, 1.943F)
          curveTo(13.023F, 18.574F, 13.0F, 18.784F, 13.0F, 19.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          reflectiveCurveToRelative(3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
          curveToRelative(-0.903F, 0.0F, -1.712F, 0.399F, -2.262F, 1.03F)
          lineTo(9.85F, 15.087F)
          curveTo(9.948F, 14.74F, 10.0F, 14.377F, 10.0F, 14.0F)
          curveToRelative(0.0F, -0.502F, -0.093F, -0.983F, -0.262F, -1.426F)
          lineToRelative(2.863F, -1.907F)
          curveTo(13.493F, 11.494F, 14.687F, 12.0F, 16.0F, 12.0F)
          close()        
      }
    }
    return _molecule24!!
  }

private var _molecule24: ImageVector? = null
