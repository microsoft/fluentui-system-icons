package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.graphics.vector.PathBuilder
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MyLocation12: ImageVector
    get() {
        if (_myLocation12 != null) {
            return _myLocation12!!
        }
        _myLocation12 = fluentIcon(name = "Filled.MyLocation12", 12f) {
            addGroup(clipPathData = PathBuilder().apply {
                moveTo(0.0F, 0.0F)
                horizontalLineToRelative(12.0F)
                verticalLineToRelative(12.0F)
                horizontalLineTo(0.0F)
                close()
                moveToRelative(0.0F, 0.0F)
            }.getNodes())
            materialPath {
                moveTo(6.0F, 7.75F)
                curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
                reflectiveCurveTo(6.966F, 4.25F, 6.0F, 4.25F)
                reflectiveCurveTo(4.25F, 5.034F, 4.25F, 6.0F)
                reflectiveCurveTo(5.034F, 7.75F, 6.0F, 7.75F)
                close()
                moveToRelative(0.75F, -5.68F)
                curveToRelative(1.608F, 0.305F, 2.875F, 1.572F, 3.18F, 3.18F)
                horizontalLineToRelative(1.32F)
                curveTo(11.664F, 5.25F, 12.0F, 5.586F, 12.0F, 6.0F)
                reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
                horizontalLineTo(9.93F)
                curveTo(9.625F, 8.359F, 8.356F, 9.627F, 6.747F, 9.93F)
                curveTo(6.749F, 9.953F, 6.75F, 9.977F, 6.75F, 10.0F)
                verticalLineToRelative(1.25F)
                curveTo(6.75F, 11.664F, 6.414F, 12.0F, 6.0F, 12.0F)
                reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
                verticalLineTo(10.0F)
                curveToRelative(0.0F, -0.023F, 0.001F, -0.047F, 0.003F, -0.07F)
                curveToRelative(-1.61F, -0.304F, -2.88F, -1.573F, -3.183F, -3.183F)
                curveTo(2.047F, 6.749F, 2.023F, 6.75F, 2.0F, 6.75F)
                horizontalLineTo(0.75F)
                curveTo(0.336F, 6.75F, 0.0F, 6.414F, 0.0F, 6.0F)
                reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
                horizontalLineTo(2.0F)
                curveToRelative(0.023F, 0.0F, 0.047F, 0.001F, 0.07F, 0.003F)
                curveToRelative(0.304F, -1.609F, 1.57F, -2.878F, 3.18F, -3.183F)
                verticalLineTo(0.75F)
                curveTo(5.25F, 0.336F, 5.586F, 0.0F, 6.0F, 0.0F)
                reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
                verticalLineToRelative(1.32F)
                close()
                moveTo(8.5F, 6.0F)
                curveToRelative(0.0F, -1.38F, -1.12F, -2.5F, -2.5F, -2.5F)
                reflectiveCurveTo(3.5F, 4.62F, 3.5F, 6.0F)
                reflectiveCurveTo(4.62F, 8.5F, 6.0F, 8.5F)
                reflectiveCurveTo(8.5F, 7.38F, 8.5F, 6.0F)
                close()
            }
        }
        return _myLocation12!!
    }

private var _myLocation12: ImageVector? = null
