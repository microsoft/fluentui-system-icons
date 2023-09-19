package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ColorLine24: ImageVector
  get() {
    if (_colorLine24 != null) {
      return _colorLine24!!
    }
    _colorLine24 = fluentIcon(name = "Filled.ColorLine24", 24f) {
      materialPath {
          moveTo(4.382F, 14.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(16.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-6.454F)
          lineToRelative(-1.316F, 1.314F)
          curveToRelative(-0.38F, 0.38F, -0.848F, 0.659F, -1.362F, 0.813F)
          lineToRelative(-4.293F, 1.288F)
          curveToRelative(-1.058F, 0.318F, -2.173F, -0.282F, -2.49F, -1.34F)
          curveToRelative(-0.117F, -0.388F, -0.113F, -0.802F, 0.011F, -1.188F)
          lineTo(4.382F, 14.0F)
          close()
          moveTo(18.648F, 2.944F)
          curveToRelative(1.256F, 1.257F, 1.256F, 3.295F, -0.002F, 4.551F)
          lineToRelative(-7.123F, 7.111F)
          curveToRelative(-0.263F, 0.263F, -0.587F, 0.456F, -0.942F, 0.563F)
          lineToRelative(-4.293F, 1.289F)
          curveToRelative(-0.53F, 0.158F, -1.087F, -0.142F, -1.246F, -0.67F)
          curveToRelative(-0.058F, -0.195F, -0.056F, -0.402F, 0.006F, -0.595F)
          lineToRelative(1.362F, -4.228F)
          curveToRelative(0.11F, -0.34F, 0.298F, -0.65F, 0.552F, -0.902F)
          lineToRelative(7.132F, -7.122F)
          curveToRelative(1.259F, -1.256F, 3.297F, -1.255F, 4.554F, 0.003F)
          close()        
      }
    }
    return _colorLine24!!
  }

private var _colorLine24: ImageVector? = null
