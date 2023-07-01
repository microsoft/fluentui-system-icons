package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Temperature24: ImageVector
  get() {
    if (_temperature24 != null) {
      return _temperature24!!
    }
    _temperature24 = fluentIcon(name = "Filled.Temperature24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(2.142F, 0.0F, 3.891F, 1.684F, 3.995F, 3.8F)
          lineTo(16.0F, 6.0F)
          lineToRelative(0.001F, 6.728F)
          lineToRelative(0.055F, 0.058F)
          curveToRelative(0.796F, 0.868F, 1.297F, 1.971F, 1.416F, 3.16F)
          lineToRelative(0.021F, 0.276F)
          lineTo(17.5F, 16.5F)
          curveToRelative(0.0F, 3.038F, -2.462F, 5.5F, -5.5F, 5.5F)
          reflectiveCurveToRelative(-5.5F, -2.462F, -5.5F, -5.5F)
          curveToRelative(0.0F, -1.305F, 0.458F, -2.538F, 1.266F, -3.511F)
          lineToRelative(0.178F, -0.205F)
          lineTo(8.0F, 12.727F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -2.073F, 1.577F, -3.778F, 3.597F, -3.98F)
          lineTo(11.8F, 2.005F)
          lineTo(12.0F, 2.0F)
          close()
          moveToRelative(0.0F, 2.0F)
          curveToRelative(-1.054F, 0.0F, -1.918F, 0.816F, -1.995F, 1.85F)
          lineTo(10.0F, 6.0F)
          verticalLineToRelative(7.593F)
          lineToRelative(-0.333F, 0.298F)
          curveTo(8.929F, 14.551F, 8.5F, 15.491F, 8.5F, 16.5F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          reflectiveCurveToRelative(3.5F, -1.567F, 3.5F, -3.5F)
          curveToRelative(0.0F, -0.937F, -0.37F, -1.813F, -1.013F, -2.462F)
          lineToRelative(-0.153F, -0.146F)
          lineToRelative(-0.333F, -0.298F)
          lineTo(14.0F, 6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(5.208F)
          curveToRelative(0.883F, 0.386F, 1.5F, 1.267F, 1.5F, 2.292F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          reflectiveCurveToRelative(-2.5F, -1.12F, -2.5F, -2.5F)
          curveToRelative(0.0F, -1.025F, 0.617F, -1.906F, 1.5F, -2.292F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          close()        
      }
    }
    return _temperature24!!
  }

private var _temperature24: ImageVector? = null
